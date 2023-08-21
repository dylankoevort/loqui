import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledChatListItem, StyledProfileImage, StyledContentContainer, StyledPrimaryRow, StyledSecondaryRow } from './styledComponents';
import { setConversation, setShowMobileUsers, setShowMobileConversation } from 'store/slices';
import { UserIcon } from 'src/assets';

const ChatListItem = (props) => {
	const dispatch = useDispatch();
	const { user } = props;
	const { displayName, timeStamp, lastMessage, photoURL, uid } = user;
	const isMobile = useSelector((state) => state.app.isMobile);

	const handleUserSelect = () => {
		const conversation = {
			userPhotoUrl: photoURL,
			userDisplayName: displayName,
			userUid: uid,
			userLastSeen: timeStamp
		};
		dispatch(setConversation(conversation));

		if (!isMobile) return;

		dispatch(setShowMobileUsers(false));
		dispatch(setShowMobileConversation(true));
	};

	return (
		<>
			<StyledChatListItem onClick={handleUserSelect}>
				<StyledProfileImage>
					<div className="image-container">
						<div className="image">
							<img src={photoURL ? photoURL : UserIcon} alt={displayName} />
						</div>
					</div>
				</StyledProfileImage>
				<StyledContentContainer>
					<StyledPrimaryRow>
						<div className="name">{displayName}</div>
						<div className="time-stamp">{timeStamp}</div>
					</StyledPrimaryRow>
					<StyledSecondaryRow>{/* <div className="message">{lastMessage}</div> */}</StyledSecondaryRow>
				</StyledContentContainer>
			</StyledChatListItem>
		</>
	);
};

export default ChatListItem;
