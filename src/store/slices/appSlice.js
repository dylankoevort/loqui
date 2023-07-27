import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: null,
	session: {
		uid: null,
		displayName: '',
		photoURL: '',
		currentView: 'LOGIN',
		loadingFinished: false,
		chatUsers: [],
		progressBarFinished: false,
		logout: false
	},
	token: null,
	loggedIn: false,
	pendingAuth: true
};

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
		setToken: (state, action) => {
			state.token = action.payload;
		},
		setSession: (state, action) => {
			state.session.uid = action.payload.uid;
			state.session.displayName = action.payload.displayName;
			state.session.photoURL = action.payload.photoURL;
		},
		setLoggedIn: (state, action) => {
			state.loggedIn = action.payload;
		},
		clearSession: () => initialState,
		setLoadingFinished: (state, action) => {
			state.session.loadingFinished = action.payload;
		},
		setCurrentView: (state, action) => {
			state.session.currentView = action.payload;
		},
		setPendingAuth: (state, action) => {
			state.pendingAuth = action.payload;
		},
		setChatUsers: (state, action) => {
			state.session.chatUsers = action.payload;
		},
		setProgressBarFinished: (state, action) => {
			state.session.progressBarFinished = action.payload;
		},
		setLogout: (state, action) => {
			state.session.logout = action.payload;
		}
	}
});

export const {
	setUser,
	setToken,
	setSession,
	setLoggedIn,
	clearSession,
	setCurrentView,
	setLoadingFinished,
	setPendingAuth,
	setChatUsers,
	setProgressBarFinished,
	setLogout
} = appSlice.actions;

export default appSlice.reducer;
