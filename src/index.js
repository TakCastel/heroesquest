import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { saveState } from './localStorage'

import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

import './index.css';

const store = configureStore()

store.subscribe(() => {
	saveState(store.getState())
})

ReactDOM.render(
	<Provider 
		store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();