import React, { useState, useEffect } from 'react';
import { StyledLoadingScreen, StyledContainer } from './styledComponents';
import LinearProgress from '@mui/material/LinearProgress';
import { Button } from 'components/shared';
import { useDispatch } from 'react-redux';
import { setProgressBarFinished } from 'store/slices';

const LoadingScreen = (props) => {
	const { handleLogout } = props;
	const dispatch = useDispatch();
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		if (progress === 100) {
			dispatch(setProgressBarFinished(true));
		}
	}, [progress]);

	// Mock Progress bar
	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((oldProgress) => {
				if (oldProgress !== 100) {
					const diff = Math.random() * 10;
					return Math.min(oldProgress + diff, 100);
				}
				return 100;
			});
		}, 250);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<StyledLoadingScreen id="loading-screen">
			<StyledContainer id="loading-container">
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
