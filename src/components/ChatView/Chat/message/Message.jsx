import React from 'react';
import { useSelector } from 'react-redux';
import { StyledMessageRow, StyledMessage } from './styledComponents';

const Message = (props) => {
	const { message } = props;
	const user = useSelector((state) => state.app.user);

	return (
		<StyledMessageRow className={`${message.sentFromUid === user.uid ? 'message-out' : 'message-in'}`}>
			<StyledMessage>
				<div className={`message-bubble ${message.sentFromUid === user.uid ? 'outgoing' : 'incoming'}`}>
					<div className="message">
						<div className="text">{message.message}</div>
						<div className="timestamp">{message.timestamp}</div>
					</div>
				</div>
				<div className={`message-padding ${message.sentFromUid === user.uid ? 'outgoing' : 'incoming'}`}></div>
			</StyledMessage>
		</StyledMessageRow>
	);
};

export default Message;
