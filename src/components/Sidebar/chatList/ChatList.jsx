import React, { useState, useEffect } from 'react';
import { StyledChatList, StyledSearchBar, StyledInfoMessage } from './styledComponents';
import ChatListItem from '../chatListItem';
import { useSelector } from 'react-redux';
import { query, collection, orderBy, onSnapshot, limit } from 'firebase/firestore';
import { db } from 'src/firebase';

const ChatList = () => {
	const displayName = useSelector((state) => state.app.session.displayName);
	const currentUserUid = useSelector((state) => state.app.session.uid);

	const [chatUsers, setChatUsers] = useState([]);

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
			<StyledSearchBar>
				<h3>{displayName}</h3>
			</StyledSearchBar>
			<StyledChatList>
				{chatUsers.map((user) => (
					<ChatListItem key={user.uid} user={user} />
				))}
				<StyledInfoMessage>
					<div className="text">Your personal messages may or may not be encrypted.</div>
				</StyledInfoMessage>
			</StyledChatList>
		</>
	);
};

export default ChatList;
