import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { StyledMessageContainer } from './styledComponents';
import Message from '../message';

const MessageContainer = (props) => {
	const { messages } = props;
	// const [messages, setMessages] = useState([]);
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
		scroll.current.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);

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
