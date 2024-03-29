import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { collection, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import { auth, db } from 'src/firebase';
import { signOut } from 'firebase/auth';

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
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { setUser } from 'store/slices';

const UsersPanel = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.app.user);
	const username = useSelector((state) => state.app.user.username);
	const userColour = useSelector((state) => state.app.user.colour);
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

		if (option === 'Logout') logoutUser();
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
					backgroundColor: userColour,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<span style={{ color: 'white', fontSize: '1.5rem' }}>{getUsernameInitials()}</span>
			</div>
		);
	};

	// Handles updating of chat list users
	useEffect(() => {
		const unsubscribe = onSnapshot(collection(db, 'users'), (querySnapshot) => {
			const usersCollection = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

			const sortedUsers = usersCollection.sort((a, b) => b.timestamp - a.timestamp);
			const filteredUsers = sortedUsers.filter((dbUser) => dbUser.uid !== user.uid);

			setChatUsers(filteredUsers);
		});

		return () => unsubscribe;
	}, []);

	const logoutUser = async () => {
		try {
			await deleteUser();
		} catch (error) {
			console.error(error);
		}
	};

	const deleteUser = async () => {
		const userRef = doc(db, 'users', user.uid);
		await deleteDoc(userRef)
			.then(async () => {
				await signOut(auth).then(() => {
					window.localStorage.removeItem('user');
					dispatch(
						setUser({
							username: '',
							colour: ''
						})
					);
				});
			})
			.catch((error) => {
				console.error(error);
			});
	};

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
					{chatUsers?.map((listUser) => listUser.uid !== user.uid && <ChatListItem key={listUser.uid} user={listUser} />)}
					<StyledInfoMessage id="info-message">
						<div className="text">Your personal messages are private to their conversation.</div>
					</StyledInfoMessage>
				</StyledUsersList>
			</StyledUsersPanel>
		</>
	);
};

export default UsersPanel;
