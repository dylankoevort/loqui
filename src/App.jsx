import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getAuth,
	signInWithRedirect,
	onAuthStateChanged,
	setPersistence,
	inMemoryPersistence,
	deleteUser,
	GoogleAuthProvider,
	getRedirectResult,
	signOut
} from 'firebase/auth';
import { query, doc, collection, getDocs, setDoc, deleteDoc, orderBy, onSnapshot, limit, addDoc, where, serverTimestamp, Timestamp } from 'firebase/firestore';
import { auth, provider, db } from 'src/firebase';
import { AppLayout } from 'components/App';
import { LandingContainer, LoadingScreen } from 'components/Landing';
import { setUser, setToken, setSession, clearSession, setIsMobile } from 'store/slices';

function App() {
	const auth = getAuth();
	const dispatch = useDispatch();
	const isFromRedirect = window.sessionStorage.getItem('fromRedirect');
	const [showLoading, setShowLoading] = useState(isFromRedirect && isFromRedirect === 'true');
	const [currentUser, setCurrentUser] = useState(null);
	const [loadingFinished, setLoadingFinished] = useState(false);
	const [userAdded, setUserAdded] = useState(false);
	const progressBarFinished = useSelector((state) => state.app.session.progressBarFinished);
	const logoutClicked = useSelector((state) => state.app.session.logout);

	window.addEventListener('resize', function () {
		setViewSize();
	});

	useEffect(() => {
		setViewSize();
	}, []);

	onAuthStateChanged(auth, (user) => {
		if (user) {
			if (currentUser && currentUser.uid === user.uid) {
				return;
			}
			window.sessionStorage.removeItem('fromRedirect');
			setCurrentUser(user);
			dispatch(setUser(user));
			dispatch(setToken(user.accessToken));
			dispatch(
				setSession({
					uid: user.uid,
					displayName: user.displayName,
					photoURL: user.photoURL
				})
			);
		} else {
			window.sessionStorage.removeItem('fromRedirect');
		}
	});

	useEffect(() => {
		if (logoutClicked) {
			handleLogout();
		}
	}, [logoutClicked]);

	useEffect(() => {
		if (userAdded && progressBarFinished) {
			setLoadingFinished(true);
			setShowLoading(false);
		}
	}, [userAdded, progressBarFinished]);

	useEffect(() => {
		if (currentUser) {
		}
		if (showLoading && currentUser && !userAdded) {
			addUser();
		}
	}, [currentUser]);

	const setViewSize = () => {
		const isMobile =
			(window.innerHeight >= window.innerWidth && window.innerWidth <= 768) || (window.innerHeight <= window.innerWidth && window.innerWidth <= 768);
		dispatch(setIsMobile(isMobile));
	};

	const addUser = async () => {
		if (!currentUser) return;

		const { uid, displayName, photoURL } = currentUser;
		const newUser = {
			displayName: displayName,
			photoURL: photoURL,
			createdAt: Timestamp.fromDate(new Date()),
			lastMessage: 'Hello there!',
			lastMessageTimestamp: Timestamp.fromDate(new Date()),
			uid
		};
		await setDoc(doc(db, 'users', uid), newUser)
			.then(() => {
				setUserAdded(true);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const deleteUser = async () => {
		const userRef = doc(db, 'users', doc.id);
		await deleteDoc(userRef);
	};

	const handleLogin = () => {
		window.sessionStorage.setItem('fromRedirect', true);
		setPersistence(auth, inMemoryPersistence)
			.then(() => {
				const provider = new GoogleAuthProvider();
				return signInWithRedirect(auth, provider);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const handleLogout = () => {
		deleteUser();
		signUserOut();
		window.sessionStorage.removeItem('fromRedirect');
		location.reload();
	};

	const signUserOut = () => {
		signOut(auth)
			.then(() => {
				dispatch(clearSession());
				location.reload();
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const landingProps = {
		handleLogin: handleLogin
	};

	const loadingScreenProps = {
		loadingFinished: loadingFinished,
		handleLogout: handleLogout
	};

	const appProps = {
		handleLogout: handleLogout
	};

	useEffect(() => {
		render();
	}, [showLoading, loadingFinished]);

	const render = () => {
		if (showLoading) {
			return <LoadingScreen {...loadingScreenProps} />;
		} else if (!loadingFinished) {
			return <LandingContainer {...landingProps} />;
		} else {
			return <AppLayout {...appProps} />;
		}
		// return <AppLayout {...appProps} />;
	};

	return render();
}

export default App;
