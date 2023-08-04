import React, { useState, useEffect, useRef } from 'react';
import { query, collection, where, or, and, orderBy, onSnapshot, limit } from 'firebase/firestore';
import { db } from 'src/firebase';
import { useSelector } from 'react-redux';
import { StyledMessageContainer } from './styledComponents';
import Message from '../message';

const MessageContainer = (props) => {
	const scroll = useRef();
	const [messages, setMessages] = useState([]);
	const conversationData = useSelector((state) => state.app.conversation);
	const uid = useSelector((state) => state.app.session.uid);

	// const mockMessages = [
	// 	{
	// 		message: 'This is a test message',
	// 		sentFromUid: uid,
	// 		sentToUid: 'QOs8b0P9E7kIJA4uggpO',
	// 		sentAt: new Date(),
	// 		timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
	// 	},
	// 	{
	// 		message: 'This is a test message number two',
	// 		sentFromUid: uid,
	// 		sentToUid: 'QOs8b0P9E7kIJA4uggpO',
	// 		sentAt: new Date(),
	// 		timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
	// 	},
	// 	{
	// 		message: 'This is an incoming message test',
	// 		sentFromUid: 'QOs8b0P9E7kIJA4uggpO',
	// 		sentToUid: uid,
	// 		sentAt: new Date(),
	// 		timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
	// 	},
	// 	{
	// 		message: 'This is a super duper extra duper super long long longggggggggggggg longggggggggggggggg long outgoing message test',
	// 		sentFromUid: uid,
	// 		sentToUid: 'QOs8b0P9E7kIJA4uggpO',
	// 		sentAt: new Date(),
	// 		timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
	// 	},
	// 	{
	// 		message: 'This is a super duper extra duper super long long longggggggggggggg longggggggggggggggg long incoming message test',
	// 		sentFromUid: 'QOs8b0P9E7kIJA4uggpO',
	// 		sentToUid: uid,
	// 		sentAt: new Date(),
	// 		timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
	// 	},
	// 	{
	// 		message: 'This is a test message',
	// 		sentFromUid: uid,
	// 		sentToUid: 'QOs8b0P9E7kIJA4uggpO',
	// 		sentAt: new Date(),
	// 		timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
	// 	},
	// 	{
	// 		message: 'This is a test message number two',
	// 		sentFromUid: uid,
	// 		sentToUid: 'QOs8b0P9E7kIJA4uggpO',
	// 		sentAt: new Date(),
	// 		timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
	// 	},
	// 	{
	// 		message: 'This is an incoming message test',
	// 		sentFromUid: 'QOs8b0P9E7kIJA4uggpO',
	// 		sentToUid: uid,
	// 		sentAt: new Date(),
	// 		timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
	// 	},
	// 	{
	// 		message: 'This is a super duper extra duper super long long longggggggggggggg longggggggggggggggg long outgoing message test',
	// 		sentFromUid: uid,
	// 		sentToUid: 'QOs8b0P9E7kIJA4uggpO',
	// 		sentAt: new Date(),
	// 		timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
	// 	},
	// 	{
	// 		message: 'This is a super duper extra duper super long long longggggggggggggg longggggggggggggggg long incoming message test',
	// 		sentFromUid: 'QOs8b0P9E7kIJA4uggpO',
	// 		sentToUid: uid,
	// 		sentAt: new Date(),
	// 		timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
	// 	},
	// 	{
	// 		message: 'This is a test message',
	// 		sentFromUid: uid,
	// 		sentToUid: 'QOs8b0P9E7kIJA4uggpO',
	// 		sentAt: new Date(),
	// 		timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
	// 	},
	// 	{
	// 		message: 'This is a test message number two',
	// 		sentFromUid: uid,
	// 		sentToUid: 'QOs8b0P9E7kIJA4uggpO',
	// 		sentAt: new Date(),
	// 		timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
	// 	},
	// 	{
	// 		message: 'This is an incoming message test',
	// 		sentFromUid: 'QOs8b0P9E7kIJA4uggpO',
	// 		sentToUid: uid,
	// 		sentAt: new Date(),
	// 		timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
	// 	},
	// 	{
	// 		message: 'This is a super duper extra duper super long long longggggggggggggg longggggggggggggggg long outgoing message test',
	// 		sentFromUid: uid,
	// 		sentToUid: 'QOs8b0P9E7kIJA4uggpO',
	// 		sentAt: new Date(),
	// 		timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
	// 	},
	// 	{
	// 		message: 'This is a super duper extra duper super long long longggggggggggggg longggggggggggggggg long incoming message test',
	// 		sentFromUid: 'QOs8b0P9E7kIJA4uggpO',
	// 		sentToUid: uid,
	// 		sentAt: new Date(),
	// 		timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
	// 	},
	// 	{
	// 		message: 'This is a test message',
	// 		sentFromUid: uid,
	// 		sentToUid: 'QOs8b0P9E7kIJA4uggpO',
	// 		sentAt: new Date(),
	// 		timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
	// 	},
	// 	{
	// 		message: 'This is a test message number two',
	// 		sentFromUid: uid,
	// 		sentToUid: 'QOs8b0P9E7kIJA4uggpO',
	// 		sentAt: new Date(),
	// 		timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
	// 	},
	// 	{
	// 		message: 'This is an incoming message test',
	// 		sentFromUid: 'QOs8b0P9E7kIJA4uggpO',
	// 		sentToUid: uid,
	// 		sentAt: new Date(),
	// 		timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
	// 	},
	// 	{
	// 		message: 'This is a super duper extra duper super long long longggggggggggggg longggggggggggggggg long outgoing message test',
	// 		sentFromUid: uid,
	// 		sentToUid: 'QOs8b0P9E7kIJA4uggpO',
	// 		sentAt: new Date(),
	// 		timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
	// 	},
	// 	{
	// 		message: 'This is a super duper extra duper super long long longggggggggggggg longggggggggggggggg long incoming message test',
	// 		sentFromUid: 'QOs8b0P9E7kIJA4uggpO',
	// 		sentToUid: uid,
	// 		sentAt: new Date(),
	// 		timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
	// 	}
	// ];

	useEffect(() => {
		scroll.current.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);

	useEffect(() => {
		const q = query(
			collection(db, 'messages'),
			or(
				and(where('sentFromUid', '==', uid), where('sentToUid', '==', conversationData.userUid)),
				and(where('sentFromUid', '==', conversationData.userUid), where('sentToUid', '==', uid))
			),
			orderBy('sentAt', 'desc'),
			limit(1000)
		);
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			const fetchedMessages = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
			fetchedMessages.map((message) => {
				message.timestamp = message.sentAt?.toDate().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
			});

			const sortedMessages = fetchedMessages.sort((a, b) => a.sentAt - b.sentAt);
			setMessages(sortedMessages);
		});
		return () => unsubscribe;
	}, [conversationData]);

	return (
		<StyledMessageContainer>
			<h4>This is the start of your chat</h4>
			{/* {mockMessages?.map((message, index) => (
				<Message key={index} message={message} />
			))} */}
			{messages?.map((message, index) => (
				<Message key={index} message={message} />
			))}
			<span ref={scroll}></span>
		</StyledMessageContainer>
	);
};

export default MessageContainer;
