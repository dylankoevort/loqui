import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDoc, serverTimestamp, query, collection, where, or, and, orderBy, onSnapshot, limit } from 'firebase/firestore';
import { db } from 'src/firebase';

import {
	StyledChatContainer,
	StyledChatHeader,
	StyledUserDetails,
	StyledProfileImage,
	StyledIconContainer,
	StyledMessageContainer,
	StyledChatFooter,
	StyledFooterActions,
	StyledIcons,
	StyledComposeMessage
} from './styledComponents';
import Message from '../message';

import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';

import { UserIcon } from 'assets';
import { setShowMobileConversation, setShowMobileUsers } from 'store/slices';

const ChatContainer = () => {
	const dispatch = useDispatch();
	const scroll = useRef();
	const isMobile = useSelector((state) => state.app.isMobile);
	const uid = useSelector((state) => state.app.session.uid);
	const conversationData = useSelector((state) => state.app.conversation);
	const [messages, setMessages] = useState([]);
	const [userDetails, setUserDetails] = useState({
		userDisplayName: '',
		userPhotoUrl: '',
		userLastSeen: ''
	});
	const [message, setMessage] = useState('');
	const currentUserUid = useSelector((state) => state.app.session.uid);
	const messageValue = useRef(message);

	useEffect(() => {
		if (conversationData) {
			setUserDetails({
				userDisplayName: conversationData.userDisplayName,
				userPhotoUrl: conversationData.userPhotoUrl,
				userLastSeen: conversationData.userLastSeen
			});
		}
	}, [conversationData]);

	const returnToChatList = () => {
		if (!isMobile) return;
		dispatch(setShowMobileConversation(false));
		dispatch(setShowMobileUsers(true));
	};

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

	const sendMessage = async (event) => {
		event.preventDefault();
		if (message.trim() === '') {
			return;
		}

		messageValue.current = message;
		setMessage('');
		return;

		// await addDoc(collection(db, 'messages'), {
		// 	message: messageValue.current,
		// 	sentFromUid: currentUserUid,
		// 	sentToUid: conversationData.userUid,
		// 	sentAt: serverTimestamp()
		// });
	};

	return (
		<>
			<StyledChatContainer id="chat-container">
				<StyledChatHeader id="chat-header">
					{isMobile && (
						<IconButton className="back-button" onClick={returnToChatList}>
							<ArrowBackIosNewIcon />
						</IconButton>
					)}
					<StyledProfileImage id="chat-profile-image">
						<div className="image-container">
							<img src={userDetails.userPhotoUrl ? userDetails.userPhotoUrl : UserIcon} alt="" />
						</div>
					</StyledProfileImage>
					<StyledUserDetails id="chat-user-details">
						<div className="name">{userDetails.userDisplayName}</div>
						{/* <div className="last-seen">{'last seen today at ' + userDetails.userLastSeen}</div> */}
					</StyledUserDetails>
					{/* <StyledIconContainer id="chat-icon-container">
				<IconButton>
					<SearchIcon />
				</IconButton>
				<IconButton>
					<MoreVertIcon />
				</IconButton>
			</StyledIconContainer> */}
				</StyledChatHeader>
				<StyledMessageContainer id="message-container">
					<h4>This is the start of your chat</h4>
					{/* {mockMessages?.map((message, index) => (
						<Message key={index} message={message} />
						))} */}
					{messages?.map((message, index) => (
						<Message key={index} message={message} />
					))}
					<span ref={scroll}></span>
				</StyledMessageContainer>
				<StyledChatFooter id="chat-footer">
					<StyledFooterActions id="footer-actions">
						{/* <StyledIcons id="footer-icons">
					<IconButton>
						<EmojiEmotionsOutlinedIcon />
					</IconButton>
					<IconButton>
						<AddIcon />
					</IconButton>
				</StyledIcons> */}
						<StyledComposeMessage id="compose-message">
							<div className="message-input">
								<div className="input-field">
									<input type="text" placeholder="Type a message" value={message} onChange={(e) => setMessage(e.target.value)} />
								</div>
							</div>
							<div className="send-message">
								<IconButton onClick={sendMessage}>
									<SendIcon />
								</IconButton>
							</div>
						</StyledComposeMessage>
					</StyledFooterActions>
				</StyledChatFooter>
			</StyledChatContainer>
		</>
	);
};

export default ChatContainer;
