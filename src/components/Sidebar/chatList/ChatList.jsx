import React, { useState, useEffect } from 'react';
import { db } from 'src/firebase';
import { query, collection, orderBy, onSnapshot, limit } from 'firebase/firestore';
import { StyledChatList, StyledSearchBar, StyledInfoMessage } from './styledComponents';
import ChatListItem from '../chatListItem';
import { useSelector } from 'react-redux';
import { fetchUsers } from 'src/helpers';

const ChatList = () => {
	const displayName = useSelector((state) => state.app.session.displayName);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		// move to loading screen (need to handle when showing chats and chat gets updated)
		// (possible seperate handler that gets called when loading and when chat displaying)
		const q = query(collection(db, 'users'), orderBy('lastMessageTimestamp', 'desc'), limit(30));

		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			const users = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
			users.map((user) => {
				user.timeStamp = user.lastMessageTimestamp.toDate().toLocaleTimeString();
			});

			const sortedUsers = users.sort((a, b) => a.lastMessageTimestamp - b.lastMessageTimestamp);

			setUsers(sortedUsers);
		});

		return () => unsubscribe;
	}, []);

	return (
		<>
			<StyledSearchBar>
				<h3>{displayName}</h3>
			</StyledSearchBar>
			<StyledChatList>
				{users.map((user) => (
					<ChatListItem
						key={user.uid}
						id={user.uid}
						name={user.displayName}
						message={user.lastMessage}
						avatarSrc={user.photoUrl}
						timeStamp={user.timeStamp}
					/>
				))}
				<StyledInfoMessage>
					<div className="text">Your personal messages may or may not be encrypted.</div>
				</StyledInfoMessage>
			</StyledChatList>
		</>
	);
};

export default ChatList;
