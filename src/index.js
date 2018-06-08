import React from 'react';
import ReactDOM from 'react-dom';
import { YMInitializer } from 'react-yandex-metrika';
import { observer, Provider } from 'mobx-react';
import './styles/index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import UiStore from './stores/ui-store';

const history = createBrowserHistory();

const uiStore = new UiStore();

const stores = {
  uiStore
};

ReactDOM.render(
  <React.Fragment>
    <YMInitializer accounts={[49184389]} version="2" />
    <Provider {...stores}>
      <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.Fragment>
  , document.getElementById('root'));
registerServiceWorker();
