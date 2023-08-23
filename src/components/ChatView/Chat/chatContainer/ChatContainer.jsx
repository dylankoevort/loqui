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
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';

import { setShowMobileConversation, setShowMobileUsers } from 'store/slices';

const ChatContainer = () => {
	const dispatch = useDispatch();
	const scroll = useRef();
	const user = useSelector((state) => state.app.user);
	const isMobile = useSelector((state) => state.app.isMobile);
	const conversationData = useSelector((state) => state.app.conversation);
	const [messages, setMessages] = useState([]);
	const [userDetails, setUserDetails] = useState({
		userDisplayName: '',
		userColour: ''
	});
	const [message, setMessage] = useState('');

	const returnToChatList = () => {
		if (!isMobile) return;
		dispatch(setShowMobileConversation(false));
		dispatch(setShowMobileUsers(true));
	};

	useEffect(() => {
		scroll.current.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);

	useEffect(() => {
		if (conversationData) {
			setUserDetails({
				userDisplayName: conversationData.userDisplayName,
				userColour: conversationData.userColour
			});

			const unsubscribe = onSnapshot(
				query(collection(db, 'users', user?.uid, 'chatUsers', conversationData?.userUid, 'messages'), orderBy('timestamp'), limit(500)),
				(snapshot) => {
					const fetchedMessages = snapshot.docs.map((doc) => ({
						id: doc.id,
						messages: doc.data()
					}));
					setMessages(fetchedMessages);
				}
			);
			return () => unsubscribe;
		}
	}, [conversationData?.userUid]);

	const sendMessage = async (event) => {
		event.preventDefault();
		if (message.trim() === '') {
			return;
		}

		setMessage('');

		try {
			if (user && conversationData) {
				// Add to current user messages
				await addDoc(collection(db, 'users', user.uid, 'chatUsers', conversationData.userUid, 'messages'), {
					username: user.username,
					messageUserId: user.uid,
					message: message,
					timestamp: new Date()
				});

				// Add to receiver messages
				await addDoc(collection(db, 'users', conversationData.userUid, 'chatUsers', user.uid, 'messages'), {
					username: user.username,
					messageUserId: user.uid,
					message: message,
					timestamp: new Date()
				});
			}
		} catch (error) {
			console.log(error);
		}
	};

	const getUsernameInitials = () => {
		const username = userDetails.userDisplayName;
		if (!username) return '';
		return username.charAt(0).toUpperCase() + username.charAt(1).toLowerCase();
	};

	const UserIcon = () => {
		return (
			<div
				className="circle"
				style={{
					height: '100%',
					width: '100%',
					borderRadius: '50%',
					backgroundColor: userDetails.userColour,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<span style={{ color: 'white', fontSize: '1.5rem' }}>{getUsernameInitials()}</span>
			</div>
		);
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
							<UserIcon />
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
					{messages?.map(({ id, messages }) => (
						<Message key={id} messages={messages} />
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
									<input
										id="messageInput"
										type="text"
										placeholder="Type a message"
										value={message}
										onChange={(e) => setMessage(e.target.value)}
									/>
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
