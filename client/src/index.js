import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import App from './smartComponents/App';
import {refreshAuthToken} from './actions/auth';


import MyFancyComponent from './smartComponents/MapComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Router >
            <App />
        </Router >    
    </Provider>
    ,document.getElementById('root'));
registerServiceWorker();
