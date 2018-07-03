import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './smartComponents/App';

import MyFancyComponent from './smartComponents/MapComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Router >
            <MyFancyComponent />
        </Router >    
    </Provider>
    ,document.getElementById('root'));
registerServiceWorker();
