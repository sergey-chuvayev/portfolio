import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory()

ReactDOM.render(<Router history={history} basename={process.env.PUBLIC_URL}>
                  <App/>
                </Router>, document.getElementById('root'));
registerServiceWorker();
