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
import { UserIcon } from 'src/assets';

const LeftPanelHeader = () => {
	const dispatch = useDispatch();
	const username = useSelector((state) => state.app.user.username);
	const userColour = useSelector((state) => state.app.user.colour);
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

	const UserIcon = () => {
		return (
			<div
				className="circle"
				style={{
					height: '100%',
					width: '100%',
					borderRadius: '50%',
					backgroundColor: userColour,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<span style={{ color: 'white', fontSize: '1.5rem' }}>{username.charAt(0).toUpperCase() + username.charAt(1).toLowerCase()}</span>
			</div>
		);
	};

	const options = ['Logout'];
	return (
		<>
			<StyledLeftPanelHeader id="left-panel-header">
				<StyledProfileImage id="left-panel-header-image">
					<div className="image-container">
						<div className="image">
							<UserIcon />
						</div>
					</div>
				</StyledProfileImage>
				<div>
					<h4>{'Hello, ' + username}</h4>
				</div>
				<StyledIconContainer id="left-panel-header-icons">
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
