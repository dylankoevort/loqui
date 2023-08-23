import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: {
		username: '',
		colour: ''
	},
	loading: false,
	isMobile: false,
	showMobileUsers: true,
	showMobileConversation: false,

	session: {
		uid: null,
		displayName: '',
		photoURL: '',
		progressBarFinished: false
	},
	token: null,
	loggedIn: false,
	conversation: {
		messages: [],
		userPhotoUrl: '',
		userDisplayName: '',
		userUid: '',
		userLastSeen: null
	}
};

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
		setConversation: (state, action) => {
			state.conversation.messages = action.payload.messages;
			state.conversation.userPhotoUrl = action.payload.userPhotoUrl;
			state.conversation.userDisplayName = action.payload.userDisplayName;
			state.conversation.userUid = action.payload.userUid;
			state.conversation.userLastSeen = action.payload.userLastSeen;
		},
		setIsMobile: (state, action) => {
			state.isMobile = action.payload;
		},
		setShowMobileUsers: (state, action) => {
			state.showMobileUsers = action.payload;
		},
		setShowMobileConversation: (state, action) => {
			state.showMobileConversation = action.payload;
		}
	}
});

export const { setUser, setConversation, setIsMobile, setShowMobileUsers, setShowMobileConversation } = appSlice.actions;

export default appSlice.reducer;
