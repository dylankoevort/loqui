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
import { setUser, setIsMobile, setLoading } from 'store/slices';
import Landing from './components/Landing';
import ComingSoon from './components/ComingSoon';
import Loading from './components/Loading';
import ChatView from 'components/ChatView';

function App() {
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.app.loading);
	const user = useSelector((state) => state.app.user);

	window.addEventListener('resize', function () {
		setViewSize();
	});

	useEffect(() => {
		setViewSize();
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

	const render = () => {
		if (loading) {
			return <Loading />;
		}

		if (user.username !== '' && user.colour !== '') {
			return <ChatView />;
		}

		return <Landing />;

		// return <Loading />;
		return <ChatView />;
		// return <ComingSoon />;
	};

	return <>{render()}</>;
}

export default App;
