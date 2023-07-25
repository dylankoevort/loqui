import React from 'react';
import { StyledAppContainer } from './styledComponents';
import LeftPanel from 'components/Sidebar/leftPanel';
import ChatContainer from 'components/Chat/chatContainer';

const AppContainer = () => {
	return (
		<StyledAppContainer>
			<LeftPanel />
			<ChatContainer />
		</StyledAppContainer>
	);
};

export default AppContainer;
