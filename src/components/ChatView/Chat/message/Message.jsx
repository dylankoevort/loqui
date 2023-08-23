import React from 'react';
import { useSelector } from 'react-redux';
import { StyledMessageRow, StyledMessage } from './styledComponents';

const Message = (props) => {
	const { messages } = props;
	const { message, messageUserId, timestamp, username } = messages;
	const user = useSelector((state) => state.app.user);

	const formatTimestamp = () => {
		return timestamp?.toDate().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
	};

	return (
		<StyledMessageRow className={`${messageUserId === user.uid ? 'message-out' : 'message-in'}`}>
			<StyledMessage>
				<div className={`message-bubble ${messageUserId === user.uid ? 'outgoing' : 'incoming'}`}>
					<div className="message">
						<div className="text">{message}</div>
						<div className="timestamp">{formatTimestamp()}</div>
					</div>
				</div>
				<div className={`message-padding ${messageUserId === user.uid ? 'outgoing' : 'incoming'}`}></div>
			</StyledMessage>
		</StyledMessageRow>
	);
};

export default Message;
