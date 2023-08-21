import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from 'src/firebase';
import { setUser, setIsMobile, setLoading } from 'store/slices';
import Landing from './components/Landing';
import ComingSoon from './components/ComingSoon';
import Loading from './components/Loading';
import ChatView from 'components/ChatView';
import { AES, enc } from 'crypto-js';

function App() {
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.app.loading);
	const user = useSelector((state) => state.app.user);
	const logout = useSelector((state) => state.app.logout);

	window.addEventListener('resize', function () {
		setViewSize();
	});

	useEffect(() => {
		setViewSize();

		const storedUser = window.localStorage.getItem('user');

		if (storedUser) {
			const bytes = AES.decrypt(storedUser, 'sdfjsdfmlsakd;h98pasdfhjg9384ty453l;iuh');
			var decryptedUser = JSON.parse(bytes.toString(enc.Utf8));
			dispatch(setUser(decryptedUser));
		}
	}, []);

	const setViewSize = () => {
		const isMobile =
			(window.innerHeight >= window.innerWidth && window.innerWidth <= 768) || (window.innerHeight <= window.innerWidth && window.innerWidth <= 768);
		dispatch(setIsMobile(isMobile));
	};

	useEffect(() => {
		setTimeout(() => {
			dispatch(setLoading(false));
		}, 4000);
	}, [loading]);

	useEffect(() => {
		const logoutUser = async () => {
			if (!logout) return;
			window.localStorage.removeItem('user');
			dispatch(
				setUser({
					username: '',
					colour: ''
				})
			);
			// TODO Fix permissions issue
			await deleteUser();
			window.location.reload();
		};

		logoutUser();
	}, [logout]);

	const deleteUser = async () => {
		const userRef = doc(db, 'users', user.uid);
		await deleteDoc(userRef);
	};

	const render = () => {
		// if (loading) {
		// 	return <Loading />;
		// }

		// if (user.username !== '' && user.colour !== '') {
		// 	return <ChatView />;
		// }

		// return <Landing />;

		// return <Loading />;
		// return <ChatView />;
		return <ComingSoon />;
	};

	return <>{render()}</>;
}

export default App;
