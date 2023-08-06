import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledChatHeader, StyledUserDetails, StyledProfileImage, StyledIconContainer } from './styledComponents';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { UserIcon } from 'assets';
import { setShowMobileConversation, setShowMobileUsers } from 'store/slices';

const ChatHeader = () => {
	const dispatch = useDispatch();
	const isMobile = useSelector((state) => state.app.isMobile);
	const conversationData = useSelector((state) => state.app.conversation);
	const [userDetails, setUserDetails] = useState({
		userDisplayName: '',
		userPhotoUrl: '',
		userLastSeen: ''
	});

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

	return (
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
	);
};

export default ChatHeader;
