import React, { useState, useEffect } from 'react';
import { getAuth, GoogleAuthProvider, getRedirectResult } from 'firebase/auth';
import { auth, db } from 'src/firebase';
import { addDoc, collection, serverTimestamp, Timestamp } from 'firebase/firestore';
import { StyledLoadingScreen, StyledContainer } from './styledComponents';
import LinearProgress from '@mui/material/LinearProgress';
import { Button } from 'components/shared';
import { useDispatch } from 'react-redux';
import { setUser, setToken, setSession, setLoggedIn, setLoadingFinished, clearSession } from 'src/store/slices';

const LoadingScreen = () => {
	const dispatch = useDispatch();
	const [progress, setProgress] = useState(0);
	const [usersFetched, setUsersFetched] = useState(true);
	const [messagesFetched, setMessagesFetched] = useState(true);
	const [newUser, setNewUser] = useState([]);

	useEffect(() => {
		const auth = getAuth();
		getRedirectResult(auth)
			.then((result) => {
				if (!result) return;

				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				const user = result.user;

				dispatch(setUser(user));
				dispatch(setToken(token));
				dispatch(
					setSession({
						uid: user.uid,
						displayName: user.displayName,
						photoURL: user.photoURL
					})
				);
				addUser();
				dispatch(setLoggedIn(true));
			})
			.catch((error) => {
				const errorCode = error.code;
				console.error('errorCode: ', errorCode);

				const errorMessage = error.message;
				console.error('errorMessage: ', errorMessage);

				const email = error.email;
				console.error('email: ', email);

				const credential = GoogleAuthProvider.credentialFromError(error);
				console.error('credential: ', credential);

				dispatch(clearSession());
			});
	});

	const addUser = async () => {
		const { uid, displayName, photoURL } = auth.currentUser;
		const newUser = {
			displayName: displayName,
			photoUrl: photoURL,
			createdAt: Timestamp.fromDate(new Date()),
			lastMessage: 'Hello there!',
			lastMessageTimestamp: Timestamp.fromDate(new Date()),
			uid
		};
		console.log(newUser);
		await addDoc(collection(db, 'users'), newUser);
	};

	const checkDataFetched = () => {
		if (usersFetched && messagesFetched) {
			const result = auth.currentUser;
			const token = result.accessToken;
			const user = result;

			dispatch(setUser(user));
			dispatch(setToken(token));
			dispatch(
				setSession({
					uid: user.uid,
					displayName: user.displayName,
					photoURL: user.photoURL
				})
			);
			addUser();
			dispatch(setLoggedIn(true));
			dispatch(setLoadingFinished(true));
		}
	};

	useEffect(() => {
		if (progress === 100) {
			checkDataFetched();
		}
	}, [progress]);

	// Mock Progress bar
	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((oldProgress) => {
				if (oldProgress !== 100) {
					const diff = Math.random() * 15;
					return Math.min(oldProgress + diff, 100);
				}
				return 100;
			});
		}, 250);

		return () => {
			clearInterval(timer);
		};
	}, []);

	useEffect(() => {
		window.sessionStorage.removeItem('fromRedirect');
	});

	const handleLogout = () => {
		dispatch(clearSession());
	};

	return (
		<StyledLoadingScreen>
			<StyledContainer>
				<div className="content">
					<div className="center-content">
						<span className="progress-bar">
							<LinearProgress variant="determinate" value={progress} />
						</span>

						<p>Loading your chats</p>
					</div>
					<div className="bottom-content">
						<span className="button">
							<Button label={'Log out'} onClick={handleLogout} bgcolour={'white'} textcolour={'var(--text-button)'} />
						</span>

						<p>Don't close this window. Your messages are downloading.</p>
					</div>
				</div>
			</StyledContainer>
		</StyledLoadingScreen>
	);
};

export default LoadingScreen;
