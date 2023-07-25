import React from 'react';
import { StyledLeftPanelHeader, StyledProfileImage, StyledIconContainer } from './styledComponents';
import PeopleIcon from '@mui/icons-material/People';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector } from 'react-redux';

const LeftPanelHeader = () => {
	const userImage = useSelector((state) => state.app.session.photoURL);
	return (
		<>
			<StyledLeftPanelHeader>
				<StyledProfileImage>
					<div className="image-container">
						<div className="image">
							<img src={userImage} alt="" />
						</div>
					</div>
				</StyledProfileImage>
				<StyledIconContainer>
					<div className="icon">
						<PeopleIcon />
					</div>
					<div className="icon">
						<DonutLargeIcon />
					</div>
					<div className="icon">
						<ChatIcon />
					</div>
					<div className="icon">
						<MoreVertIcon />
					</div>
				</StyledIconContainer>
			</StyledLeftPanelHeader>
		</>
	);
};

export default LeftPanelHeader;
