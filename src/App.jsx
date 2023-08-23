import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from 'src/firebase';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { setUser, setIsMobile } from 'store/slices';
import Landing from './components/Landing';
import ComingSoon from './components/ComingSoon';
import Loading from './components/Loading';
import ChatView from 'components/ChatView';

function App() {
	const dispatch = useDispatch();
	const [showTempLoading, setShowTempLoading] = useState(true);
	const [user, loading] = useAuthState(auth);

	window.addEventListener('resize', function () {
		setViewSize();
	});

	useEffect(() => {
		setViewSize();
	}, []);

	useEffect(() => {
		setTimeout(() => {
			setShowTempLoading(false);
		}, 2000);
	}, []);

	useEffect(() => {
		if (!user) return;
		const getStoredUser = async () => {
			const docSnap = await getDoc(doc(db, 'users', user.uid));
			const storedUser = docSnap.data();

			if (storedUser) {
				dispatch(setUser(storedUser));
			} else {
				try {
					await signOut(auth).then(() => {
						window.localStorage.removeItem('user');
						dispatch(
							setUser({
								username: '',
								colour: ''
							})
						);
					});
				} catch (error) {
					console.error(error);
					alert(error);
				}
			}
		};
		getStoredUser();
	}, [user]);

	const setViewSize = () => {
		const isMobile =
			(window.innerHeight >= window.innerWidth && window.innerWidth <= 768) || (window.innerHeight <= window.innerWidth && window.innerWidth <= 768);
		dispatch(setIsMobile(isMobile));
	};

	const render = () => {
		if (loading || showTempLoading) {
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
