import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: null,
	session: {
		uid: null,
		displayName: '',
		photoURL: '',
		currentView: 'LOGIN',
		loadingFinished: false
	},
	token: null,
	loggedIn: false
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
		}
	}
});

export const { setUser, setToken, setSession, setLoggedIn, clearSession, setCurrentView, setLoadingFinished } = appSlice.actions;

export default appSlice.reducer;
