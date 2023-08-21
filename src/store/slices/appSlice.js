import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: {
		username: '',
		colour: ''
	},
	loading: false,

	session: {
		uid: null,
		displayName: '',
		photoURL: '',
		progressBarFinished: false,
		logout: false
	},
	token: null,
	loggedIn: false,
	conversation: {
		messages: [],
		userPhotoUrl: '',
		userDisplayName: '',
		userUid: '',
		userLastSeen: null
	},
	isMobile: false,
	showMobileUsers: true,
	showMobileConversation: false
};

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setToken: (state, action) => {
			state.token = action.payload;
		},
		setSession: (state, action) => {
			state.session.uid = action.payload.uid;
			state.session.displayName = action.payload.displayName;
			state.session.photoURL = action.payload.photoURL;
		},
		clearSession: () => initialState,
		setProgressBarFinished: (state, action) => {
			state.session.progressBarFinished = action.payload;
		},
		setLogout: (state, action) => {
			state.session.logout = action.payload;
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

export const {
	setUser,
	setLoading,
	setToken,
	setSession,
	setConversation,
	clearSession,
	setProgressBarFinished,
	setLogout,
	setIsMobile,
	setShowMobileUsers,
	setShowMobileConversation
} = appSlice.actions;

export default appSlice.reducer;
