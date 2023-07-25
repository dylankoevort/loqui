import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { appSlice } from './slices';

const reducer = combineReducers({
	app: appSlice
});

const store = configureStore({
	reducer: reducer,
	devTools: import.meta.env.VITE_environment !== 'production',
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false
		})
});

export default store;
