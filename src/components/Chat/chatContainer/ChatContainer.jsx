import React, { useState, useEffect } from 'react';
import { query, collection, orderBy, onSnapshot, limit } from 'firebase/firestore';
import { db } from 'src/firebase';
import { useSelector } from 'react-redux';
import { StyledChatContainer } from './styledComponents';
import ChatFooter from '../chatFooter';
import ChatHeader from '../chatHeader';
import MessageContainer from '../messageContainer';

const ChatContainer = () => {
	const [messages, setMessages] = useState([]);
	const conversationData = useSelector((state) => state.app.conversationData);

	useEffect(() => {
		if (conversationData) {
			setMessages(conversationData.messages);
		}
	}, [conversationData]);

	useEffect(() => {
		const q = query(collection(db, 'messages'), orderBy('sentAt', 'desc'), limit(50));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			const fetchedMessages = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
			fetchedMessages.map((message) => {
				message.timestamp = message.sentAt?.toDate().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
			});

			const sortedMessages = fetchedMessages.sort((a, b) => a.sentAt - b.sentAt);
			setMessages(sortedMessages);
		});
		return () => unsubscribe;
	}, []);

	return (
		<>
			<StyledChatContainer>
				<ChatHeader conversationData={conversationData} />
				<MessageContainer messages={messages} />
				<ChatFooter />
			</StyledChatContainer>
		</>
	);
};

export default ChatContainer;
