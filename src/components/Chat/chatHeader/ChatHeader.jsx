import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StyledChatHeader, StyledUserDetails, StyledProfileImage, StyledIconContainer } from './styledComponents';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { UserIcon } from 'assets';

const ChatHeader = () => {
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

	return (
		<StyledChatHeader>
			<StyledProfileImage>
				<div className="image-container">
					<img src={userDetails.userPhotoUrl ? userDetails.userPhotoUrl : UserIcon} alt="" />
				</div>
			</StyledProfileImage>
			<StyledUserDetails>
				<div className="name">{userDetails.userDisplayName}</div>
				<div className="last-seen">{'last seen today at ' + userDetails.userLastSeen}</div>
			</StyledUserDetails>
			<StyledIconContainer>
				<IconButton>
					<SearchIcon />
				</IconButton>
				<IconButton>
					<MoreVertIcon />
				</IconButton>
			</StyledIconContainer>
		</StyledChatHeader>
	);
};

export default ChatHeader;
