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
import { AppContainer, AppLayout } from 'components/App';
import { setUser, setIsMobile, setLoading } from 'store/slices';
import Landing from './components/Landing';
import ComingSoon from './components/ComingSoon';
import Loading from './components/Loading/Loading';

function App() {
	const auth = getAuth();
	const dispatch = useDispatch();
	const logoutClicked = useSelector((state) => state.app.session.logout);
	const loading = useSelector((state) => state.app.loading);

	window.addEventListener('resize', function () {
		setViewSize();
	});

	useEffect(() => {
		setViewSize();
	}, []);

	useEffect(() => {
		if (logoutClicked) {
			handleLogout();
		}
	}, [logoutClicked]);

	const setViewSize = () => {
		const isMobile =
			(window.innerHeight >= window.innerWidth && window.innerWidth <= 768) || (window.innerHeight <= window.innerWidth && window.innerWidth <= 768);
		dispatch(setIsMobile(isMobile));
	};

	const render = () => {
		if (loading) {
			return <Loading />;
		}
		// return <Landing />;
		return <ComingSoon />;
	};

	return <>{render()}</>;
}

export default App;
