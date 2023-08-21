import React from 'react';
import { StyledLeftPanel } from './styledComponents';
import LeftPanelHeader from '../leftPanelHeader';
import ChatList from '../chatList';

const LeftPanel = () => {
	return (
		<>
			<StyledLeftPanel id="left-panel">
				<LeftPanelHeader />
				<ChatList />
			</StyledLeftPanel>
		</>
	);
};

export default LeftPanel;
