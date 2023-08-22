import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { query, collection, orderBy, onSnapshot, limit } from 'firebase/firestore';
import { db } from 'src/firebase';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {
	StyledUsersPanel,
	StyledUsersPanelHeader,
	StyledProfileImage,
	StyledIconContainer,
	StyledUsersList,
	StyledSearchBar,
	StyledInfoMessage
} from './styledComponents';
import ChatListItem from '../chatListItem';

import IconButton from '@mui/material/IconButton';
import PeopleIcon from '@mui/icons-material/People';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { setLogout } from 'store/slices';

const UsersPanel = () => {
	const dispatch = useDispatch();
	const username = useSelector((state) => state.app.user.username);
	const userColour = useSelector((state) => state.app.user.colour);
	const currentUserUid = useSelector((state) => state.app.session.uid);
	const [chatUsers, setChatUsers] = useState([]);
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const options = ['Logout'];

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

	// Handles updating of chat list users
	useEffect(() => {
		const q = query(collection(db, 'users'), orderBy('lastMessageTimestamp'), limit(60));

		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			const usersCollection = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
			usersCollection.map((user) => {
				user.timeStamp = user.lastMessageTimestamp.toDate().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
			});

			const sortedUsers = usersCollection.sort((a, b) => b.lastMessageTimestamp - a.lastMessageTimestamp);
			const filteredUsers = sortedUsers.filter((user) => user.uid !== currentUserUid);

			setChatUsers(filteredUsers);
		});

		return () => unsubscribe;
	}, []);

	return (
		<>
			<StyledUsersPanel id="left-panel">
				<StyledUsersPanelHeader id="left-panel-header">
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
				</StyledUsersPanelHeader>
				<StyledSearchBar id="search-bar">
					<h4>{'Users online: ' + (chatUsers.length + 1)}</h4>
				</StyledSearchBar>
				<StyledUsersList id="chat-list">
					{chatUsers.map((user) => (
						<ChatListItem key={user.uid} user={user} />
					))}
					<StyledInfoMessage id="info-message">
						<div className="text">Your personal messages may or may not be encrypted.</div>
					</StyledInfoMessage>
				</StyledUsersList>
			</StyledUsersPanel>
		</>
	);
};

export default UsersPanel;