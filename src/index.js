// React
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// Application
import App from './App';
import './index.css';

// import { saveState } from './localStorage'


const store = configureStore()

// store.subscribe(() => {
// 	saveState(store.getState())
// })

ReactDOM.render(
	<Provider 
		store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();