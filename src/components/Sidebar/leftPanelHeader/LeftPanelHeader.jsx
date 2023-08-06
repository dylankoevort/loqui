import React, { useState } from 'react';
import { StyledLeftPanelHeader, StyledProfileImage, StyledIconContainer } from './styledComponents';
import IconButton from '@mui/material/IconButton';
import PeopleIcon from '@mui/icons-material/People';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from 'store/slices';

const LeftPanelHeader = () => {
	const dispatch = useDispatch();
	const userImage = useSelector((state) => state.app.session.photoURL);
	const displayName = useSelector((state) => state.app.session.displayName);
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleIconClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const handleMenuItemClick = (option) => {
		handleMenuClose();

		if (option === 'Logout') dispatch(setLogout(true));
	};

	const options = ['Logout'];
	return (
		<>
			<StyledLeftPanelHeader id="left-panel-header">
				<StyledProfileImage id="left-panel-header-image">
					<div className="image-container">
						<div className="image">
							<img src={userImage} alt="" />
						</div>
					</div>
				</StyledProfileImage>
				<div>
					<h4>{'Hello, ' + displayName}</h4>
				</div>
				<StyledIconContainer id="left-panel-header-icons">
					{/* <div className="icon">
						<IconButton>
							<PeopleIcon />
						</IconButton>
					</div>
					<div className="icon">
						<IconButton>
							<DonutLargeIcon />
						</IconButton>
					</div>
					<div className="icon">
						<IconButton>
							<ChatIcon />
						</IconButton>
					</div> */}
					<div className="icon">
						<IconButton
							aria-label="more"
							id="options-menu-button"
							aria-controls={open ? 'long-menu' : undefined}
							aria-expanded={open ? 'true' : undefined}
							aria-haspopup="true"
							onClick={handleIconClick}
						>
							<MoreVertIcon />
						</IconButton>
						<Menu
							id="options-menu"
							MenuListProps={{
								'aria-labelledby': 'options-menu-button'
							}}
							anchorEl={anchorEl}
							open={open}
							onClose={handleMenuClose}
						>
							{options.map((option) => (
								<MenuItem key={option} onClick={() => handleMenuItemClick(option)}>
									{option}
								</MenuItem>
							))}
						</Menu>
					</div>
				</StyledIconContainer>
			</StyledLeftPanelHeader>
		</>
	);
};

export default LeftPanelHeader;
