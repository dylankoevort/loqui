import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { doc, deleteDoc } from 'firebase/firestore';
import { auth, db } from 'src/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { setUser, setIsMobile, setLoading } from 'store/slices';
import Landing from './components/Landing';
import ComingSoon from './components/ComingSoon';
import Loading from './components/Loading';
import ChatView from 'components/ChatView';
import { AES, enc } from 'crypto-js';

function App() {
	const dispatch = useDispatch();
	// const loading = useSelector((state) => state.app.loading);
	// const user = useSelector((state) => state.app.user);
	const [user, loading] = useAuthState(auth);

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

	const render = () => {
		if (loading) {
			return <Loading />;
		}

		return user ? <ChatView /> : <Landing />;

		// return <Landing />;

		// return <Loading />;
		// return <ChatView />;
		// return <ComingSoon />;
	};

	return <>{render()}</>;
}

export default App;
