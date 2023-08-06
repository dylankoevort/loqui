import React from 'react';
import { StyledAppLayout } from './styledComponents';
import AppContainer from '../appContainer';

const AppLayout = () => {
	return (
		<>
			<StyledAppLayout id="app-layout">
				<AppContainer />
			</StyledAppLayout>
		</>
	);
};

export default AppLayout;
