import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth, db } from 'src/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { StyledChatFooter, StyledFooterActions, StyledIcons, StyledComposeMessage } from './styledComponents';
import IconButton from '@mui/material/IconButton';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';

const ChatFooter = () => {
	const [message, setMessage] = useState('');
	const user = useSelector((state) => state.app.user);

	const messageRef = useRef(message);
	const messageValue = useRef(message);

	// window.addEventListener('keydown', (e) => {
	// 	if (e.key === 'Enter') {
	// 		sendMessage(e);
	// 	}
	// });

	const sendMessage = async (event) => {
		event.preventDefault();
		if (message.trim() === '') {
			return;
		}

		// can prevent spamming
		// if (message == messageRef.current) {
		// 	return;
		// }

		messageValue.current = message;
		setMessage('');

		await addDoc(collection(db, 'messages'), {
			message: messageValue.current,
			sentFromUid: user.uid,
			sentToUid: 'QOs8b0P9E7kIJA4uggpO',
			sentAt: serverTimestamp()
		});

		// messageRef.current = message;
	};

	return (
		<StyledChatFooter>
			<StyledFooterActions>
				<StyledIcons>
					<IconButton>
						<EmojiEmotionsOutlinedIcon />
					</IconButton>
					<IconButton>
						<AddIcon />
					</IconButton>
				</StyledIcons>
				<StyledComposeMessage>
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
