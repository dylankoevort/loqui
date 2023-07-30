import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledChatHeader, StyledUserDetails, StyledProfileImage, StyledIconContainer } from './styledComponents';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ChatHeader = () => {
	const userImage = useSelector((state) => state.app.session.photoURL);
	return (
		<StyledChatHeader>
			<StyledProfileImage>
				<div className="image-container">
					<img src={userImage} alt="" />
				</div>
			</StyledProfileImage>
			<StyledUserDetails>
				<div className="name">{'Test'}</div>
				<div className="last-seen">{'last seen today at 21:21'}</div>
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
