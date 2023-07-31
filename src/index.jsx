import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './App.jsx';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
			<div className="footer">Copyright © 2023 | dylan koevort</div>
		</Provider>
	</React.StrictMode>
);
