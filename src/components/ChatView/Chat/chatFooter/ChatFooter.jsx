import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { db } from 'src/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { StyledChatFooter, StyledFooterActions, StyledIcons, StyledComposeMessage } from './styledComponents';
import IconButton from '@mui/material/IconButton';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';

const ChatFooter = () => {
	const [message, setMessage] = useState('');
	const currentUserUid = useSelector((state) => state.app.session.uid);
	const conversationData = useSelector((state) => state.app.conversation);

	const messageValue = useRef(message);

	const sendMessage = async (event) => {
		event.preventDefault();
		if (message.trim() === '') {
			return;
		}

		messageValue.current = message;
		setMessage('');

		await addDoc(collection(db, 'messages'), {
			message: messageValue.current,
			sentFromUid: currentUserUid,
			sentToUid: conversationData.userUid,
			sentAt: serverTimestamp()
		});
	};

	return (
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
	);
};

export default ChatFooter;
