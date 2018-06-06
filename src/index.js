import React from 'react';
import ReactDOM from 'react-dom';
import { observer, Provider } from 'mobx-react';
import './styles/index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import UiStore from './stores/ui-store';

const history = createBrowserHistory();

const uiStore = new UiStore();

const stores = {
  uiStore
};

ReactDOM.render(
  <Provider {...stores}>
    <HashRouter history={history} basename="/portfolio">
      <App/>
    </HashRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
