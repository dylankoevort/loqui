import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: {
		username: '',
		colour: ''
	},
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
		userDisplayName: '',
		userUid: '',
		userColour: ''
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
			state.conversation.userDisplayName = action.payload.userDisplayName;
			state.conversation.userUid = action.payload.userUid;
			state.conversation.userColour = action.payload.userColour;
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
