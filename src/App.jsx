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
import LandingNew from './components/LandingNew';
import ComingSoon from './components/ComingSoon';

function App() {
	const auth = getAuth();
	const dispatch = useDispatch();
	const logoutClicked = useSelector((state) => state.app.session.logout);

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
		// return <LandingNew />;
		return <ComingSoon />;
	};

	return render();
}

export default App;
