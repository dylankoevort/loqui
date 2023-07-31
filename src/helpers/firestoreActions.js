import { db } from 'src/firebase';
import { query, collection, orderBy, onSnapshot, limit } from 'firebase/firestore';

const fetchUsers = () => {
	let sortedUsers = [];
	const q = query(collection(db, 'users'), orderBy('lastMessageTimestamp', 'desc'), limit(30));

	const unsubscribe = onSnapshot(q, (querySnapshot) => {
		const users = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
		users.map((user) => {
			user.timeStamp = user.lastMessageTimestamp.toDate().toLocaleTimeString();
		});

		sortedUsers = users.sort((a, b) => a.lastMessageTimestamp - b.lastMessageTimestamp);
	});

	return sortedUsers;
};

export { fetchUsers };
