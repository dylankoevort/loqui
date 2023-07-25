import React from 'react';
import { StyledChatListItem, StyledProfileImage, StyledContentContainer, StyledPrimaryRow, StyledSecondaryRow } from './styledComponents';

const ChatListItem = (props) => {
	const { name, message, timeStamp, avatarSrc } = props;
	return (
		<>
			<StyledChatListItem>
				<StyledProfileImage>
					<div className="image-container">
						<div className="image">
							<img src={avatarSrc} alt={name} />
						</div>
					</div>
				</StyledProfileImage>
				<StyledContentContainer>
					<StyledPrimaryRow>
						<div className="name">{name}</div>
						<div className="time-stamp">{timeStamp}</div>
					</StyledPrimaryRow>
					<StyledSecondaryRow>
						<div className="message">{message}</div>
					</StyledSecondaryRow>
				</StyledContentContainer>
			</StyledChatListItem>
		</>
	);
};

export default ChatListItem;
