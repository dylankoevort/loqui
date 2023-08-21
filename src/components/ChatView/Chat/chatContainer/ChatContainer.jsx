import React from 'react';
import { StyledChatContainer } from './styledComponents';
import ChatFooter from '../chatFooter';
import ChatHeader from '../chatHeader';
import MessageContainer from '../messageContainer';

const ChatContainer = () => {
	return (
		<>
			<StyledChatContainer id="chat-container">
				<ChatHeader />
				<MessageContainer />
				<ChatFooter />
			</StyledChatContainer>
		</>
	);
};

export default ChatContainer;
