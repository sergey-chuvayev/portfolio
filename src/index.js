import React from 'react';
import ReactDOM from 'react-dom';
import { observer, Provider } from 'mobx-react';
import './styles/index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import UiStore from './stores/ui-store';

const history = createBrowserHistory();

const uiStore = new UiStore();

const stores = {
  uiStore
};

ReactDOM.render(
  <Provider {...stores}>
    <Router history={history} basename={process.env.PUBLIC_URL}>
      <App/>
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
