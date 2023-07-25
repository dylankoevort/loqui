import { useDispatch, useSelector } from 'react-redux';
import { AppLayout } from 'components/App';
import { LandingContainer, LoadingScreen } from 'components/Landing';
import { useEffect } from 'react';
import { setCurrentView } from 'src/store/slices';

function App() {
	const dispatch = useDispatch();
	const loggedIn = useSelector((state) => state.app.loggedIn);
	const uid = useSelector((state) => state.app.session.uid);
	const loadingFinished = useSelector((state) => state.app.session.loadingFinished);
	const currentView = useSelector((state) => state.app.session.currentView);
	const isFromRedirect = window.sessionStorage.getItem('fromRedirect') === 'true';

	useEffect(() => {
		if (!isFromRedirect) return;
		dispatch(setCurrentView('LOADING'));
	}, []);

	useEffect(() => {
		if (loadingFinished) {
			if (loggedIn && uid) {
				dispatch(setCurrentView('APP'));
			}
			return;
		}
	}, [loadingFinished, loggedIn, uid]);

	useEffect(() => {
		renderView();
	}, [currentView]);

	const renderView = () => {
		if (isFromRedirect) return <LoadingScreen />;

		switch (currentView) {
			case 'LOGIN':
				return <LandingContainer />;
			case 'LOADING':
				return <LoadingScreen />;
			case 'APP':
				return <AppLayout />;
		}
	};

	return <>{renderView()}</>;
}

export default App;
