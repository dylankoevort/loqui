import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StyledAppContainer } from './styledComponents';
import LeftPanel from 'components/Sidebar/leftPanel';
import ChatContainer from 'components/Chat/chatContainer';
import ConversationCover from 'components/Chat/conversationCover';

const AppContainer = () => {
	const conversationData = useSelector((state) => state.app.conversation);
	const [showConversation, setShowConversation] = useState(false);

	useEffect(() => {
		setShowConversation(conversationData.userUid !== '');
	}, [conversationData]);

	return (
		<StyledAppContainer>
			<LeftPanel />
			{showConversation ? <ChatContainer /> : <ConversationCover />}
		</StyledAppContainer>
	);
};

export default AppContainer;
