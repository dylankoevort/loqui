import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';

export default useAuth = () => {
	const auth = getAuth();
	const [authState, setAuthState] = useState({
		isSignedIn: false,
		pending: true,
		user: null
	});

	useEffect(() => {
		const unregisterAuthObserver = onAuthStateChanged((user) => setAuthState({ user, pending: false, isSignedIn: !!user }));
		return () => unregisterAuthObserver();
	}, []);

	return { auth, ...authState };
};
