import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { query, collection, orderBy, onSnapshot, limit } from 'firebase/firestore';
import { db } from 'src/firebase';
import { StyledMessageContainer } from './styledComponents';
import Message from '../message';

const MessageContainer = () => {
	const [messages, setMessages] = useState([]);
	const scroll = useRef();
	const uid = useSelector((state) => state.app.session.uid);

	const mockMessages = [
		{
			message: 'This is a test message',
			sentFromUid: uid,
			sentToUid: 'QOs8b0P9E7kIJA4uggpO',
			sentAt: new Date(),
			timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
		},
		{
			message: 'This is a test message number two',
			sentFromUid: uid,
			sentToUid: 'QOs8b0P9E7kIJA4uggpO',
			sentAt: new Date(),
			timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
		},
		{
			message: 'This is an incoming message test',
			sentFromUid: 'QOs8b0P9E7kIJA4uggpO',
			sentToUid: uid,
			sentAt: new Date(),
			timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
		},
		{
			message: 'This is a super duper extra duper super long long longggggggggggggg longggggggggggggggg long outgoing message test',
			sentFromUid: uid,
			sentToUid: 'QOs8b0P9E7kIJA4uggpO',
			sentAt: new Date(),
			timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
		},
		{
			message: 'This is a super duper extra duper super long long longggggggggggggg longggggggggggggggg long incoming message test',
			sentFromUid: 'QOs8b0P9E7kIJA4uggpO',
			sentToUid: uid,
			sentAt: new Date(),
			timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
		},
		{
			message: 'This is a test message',
			sentFromUid: uid,
			sentToUid: 'QOs8b0P9E7kIJA4uggpO',
			sentAt: new Date(),
			timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
		},
		{
			message: 'This is a test message number two',
			sentFromUid: uid,
			sentToUid: 'QOs8b0P9E7kIJA4uggpO',
			sentAt: new Date(),
			timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
		},
		{
			message: 'This is an incoming message test',
			sentFromUid: 'QOs8b0P9E7kIJA4uggpO',
			sentToUid: uid,
			sentAt: new Date(),
			timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
		},
		{
			message: 'This is a super duper extra duper super long long longggggggggggggg longggggggggggggggg long outgoing message test',
			sentFromUid: uid,
			sentToUid: 'QOs8b0P9E7kIJA4uggpO',
			sentAt: new Date(),
			timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
		},
		{
			message: 'This is a super duper extra duper super long long longggggggggggggg longggggggggggggggg long incoming message test',
			sentFromUid: 'QOs8b0P9E7kIJA4uggpO',
			sentToUid: uid,
			sentAt: new Date(),
			timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
		},
		{
			message: 'This is a test message',
			sentFromUid: uid,
			sentToUid: 'QOs8b0P9E7kIJA4uggpO',
			sentAt: new Date(),
			timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
		},
		{
			message: 'This is a test message number two',
			sentFromUid: uid,
			sentToUid: 'QOs8b0P9E7kIJA4uggpO',
			sentAt: new Date(),
			timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
		},
		{
			message: 'This is an incoming message test',
			sentFromUid: 'QOs8b0P9E7kIJA4uggpO',
			sentToUid: uid,
			sentAt: new Date(),
			timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
		},
		{
			message: 'This is a super duper extra duper super long long longggggggggggggg longggggggggggggggg long outgoing message test',
			sentFromUid: uid,
			sentToUid: 'QOs8b0P9E7kIJA4uggpO',
			sentAt: new Date(),
			timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
		},
		{
			message: 'This is a super duper extra duper super long long longggggggggggggg longggggggggggggggg long incoming message test',
			sentFromUid: 'QOs8b0P9E7kIJA4uggpO',
			sentToUid: uid,
			sentAt: new Date(),
			timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
		},
		{
			message: 'This is a test message',
			sentFromUid: uid,
			sentToUid: 'QOs8b0P9E7kIJA4uggpO',
			sentAt: new Date(),
			timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
		},
		{
			message: 'This is a test message number two',
			sentFromUid: uid,
			sentToUid: 'QOs8b0P9E7kIJA4uggpO',
			sentAt: new Date(),
			timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
		},
		{
			message: 'This is an incoming message test',
			sentFromUid: 'QOs8b0P9E7kIJA4uggpO',
			sentToUid: uid,
			sentAt: new Date(),
			timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
		},
		{
			message: 'This is a super duper extra duper super long long longggggggggggggg longggggggggggggggg long outgoing message test',
			sentFromUid: uid,
			sentToUid: 'QOs8b0P9E7kIJA4uggpO',
			sentAt: new Date(),
			timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
		},
		{
			message: 'This is a super duper extra duper super long long longggggggggggggg longggggggggggggggg long incoming message test',
			sentFromUid: 'QOs8b0P9E7kIJA4uggpO',
			sentToUid: uid,
			sentAt: new Date(),
			timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
		}
	];

	useEffect(() => {
		const q = query(collection(db, 'messages'), orderBy('sentAt', 'desc'), limit(50));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			const fetchedMessages = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
			fetchedMessages.map((message) => {
				message.timestamp = message.sentAt?.toDate().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
			});

			const sortedMessages = fetchedMessages.sort((a, b) => a.sentAt - b.sentAt);
			setMessages(sortedMessages);
			scroll.current.scrollIntoView({ behavior: 'smooth' });
		});
		return () => unsubscribe;
	}, []);

	return (
		<StyledMessageContainer>
			{mockMessages?.map((message, index) => (
				<Message key={index} message={message} />
			))}
			{messages?.map((message, index) => (
				<Message key={index} message={message} />
			))}
			<span ref={scroll}></span>
		</StyledMessageContainer>
	);
};

export default MessageContainer;
