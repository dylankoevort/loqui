import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StyledChatView, StyledAppContainer } from './styledComponents';
import LeftPanel from 'components/Sidebar/leftPanel';
import ChatContainer from 'components/Chat/chatContainer';
import ConversationCover from 'components/Chat/conversationCover';

const ChatView = () => {
	const conversationData = useSelector((state) => state.app.conversation);
	const [showConversation, setShowConversation] = useState(false);
	const isMobile = useSelector((state) => state.app.isMobile);
	const [showMobile, setShowMobile] = useState(isMobile);
	const showMobileUsers = useSelector((state) => state.app.showMobileUsers);
	const showMobileConversation = useSelector((state) => state.app.showMobileConversation);

	useEffect(() => {
		setShowConversation(conversationData.userUid !== '');
	}, [conversationData]);

	useEffect(() => {
		setShowMobile(isMobile);
	}, [isMobile]);

	return (
		<StyledChatView>
			<StyledAppContainer>
				{showMobile && (
					<>
						{showMobileUsers && <LeftPanel />}
						{showMobileConversation && <ChatContainer />}
					</>
				)}
				{!showMobile && (
					<>
						<LeftPanel />
						{showConversation ? <ChatContainer /> : <ConversationCover />}
					</>
				)}
			</StyledAppContainer>
		</StyledChatView>
	);
};

export default ChatView;