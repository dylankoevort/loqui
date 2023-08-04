import React from 'react';
import { useDispatch } from 'react-redux';
import { StyledChatListItem, StyledProfileImage, StyledContentContainer, StyledPrimaryRow, StyledSecondaryRow } from './styledComponents';
import { setConversation } from 'store/slices';

const ChatListItem = (props) => {
	const dispatch = useDispatch();
	const { user } = props;
	const { displayName, timeStamp, lastMessage, photoURL, uid } = user;

	const handleUserSelect = () => {
		const conversation = {
			userPhotoUrl: photoURL,
			userDisplayName: displayName,
			userUid: uid,
			userLastSeen: timeStamp
		};
		dispatch(setConversation(conversation));
	};

	return (
		<>
			<StyledChatListItem onClick={handleUserSelect}>
				<StyledProfileImage>
					<div className="image-container">
						<div className="image">
							<img src={photoURL} alt={displayName} />
						</div>
					</div>
				</StyledProfileImage>
				<StyledContentContainer>
					<StyledPrimaryRow>
						<div className="name">{displayName}</div>
						<div className="time-stamp">{timeStamp}</div>
					</StyledPrimaryRow>
					<StyledSecondaryRow>
						<div className="message">{lastMessage}</div>
					</StyledSecondaryRow>
				</StyledContentContainer>
			</StyledChatListItem>
		</>
	);
};

export default ChatListItem;
