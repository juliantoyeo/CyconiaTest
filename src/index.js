import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import reduxStore from './store/store'

ReactDOM.render(
	<Provider store={reduxStore.store}>
		<PersistGate loading={null} persistor={reduxStore.persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);

reportWebVitals();
