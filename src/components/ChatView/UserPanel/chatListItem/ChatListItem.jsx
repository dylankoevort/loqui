import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledChatListItem, StyledProfileImage, StyledContentContainer, StyledPrimaryRow, StyledSecondaryRow } from './styledComponents';
import { setConversation, setShowMobileUsers, setShowMobileConversation } from 'store/slices';

const ChatListItem = (props) => {
	const dispatch = useDispatch();
	const { user } = props;
	const { username, uid, colour } = user;
	const isMobile = useSelector((state) => state.app.isMobile);

	const handleUserSelect = () => {
		const conversation = {
			userDisplayName: username,
			userUid: uid,
			userColour: colour
		};
		dispatch(setConversation(conversation));

		if (!isMobile) return;

		dispatch(setShowMobileUsers(false));
		dispatch(setShowMobileConversation(true));
	};

	const getUsernameInitials = () => {
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
					backgroundColor: colour,
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
			<StyledChatListItem onClick={handleUserSelect}>
				<StyledProfileImage>
					<div className="image-container">
						<div className="image">
							<UserIcon />
						</div>
					</div>
				</StyledProfileImage>
				<StyledContentContainer>
					<StyledPrimaryRow>
						<div className="name">{username}</div>
					</StyledPrimaryRow>
					<StyledSecondaryRow></StyledSecondaryRow>
				</StyledContentContainer>
			</StyledChatListItem>
		</>
	);
};

export default ChatListItem;
