import React from 'react';
import ReactDOM from 'react-dom';
import { YMInitializer } from 'react-yandex-metrika';
import { observer, Provider } from 'mobx-react';
import './styles/index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import ApolloClient from "apollo-boost";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { ApolloProvider } from "react-apollo";
import UiStore from './stores/ui-store';

const client = new ApolloClient({
  uri: "https://us-central1-portfolio-15be7.cloudfunctions.net/api/graphql"
});


const history = createBrowserHistory();

const uiStore = new UiStore();

const stores = {
  uiStore
};

ReactDOM.render(
  <React.Fragment>
    <YMInitializer accounts={[49184389]} version="2" />
    <Provider {...stores}>
      <HashRouter history={history} basename={process.env.PUBLIC_URL}>
        <ApolloProvider client={client}>
          <HashRouter history={history} basename={process.env.PUBLIC_URL}>
            <Query
              query={gql`
                {
                  projects {
                    name
                  }
                }
              `}
            >
              {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;
                return <App projects={data.projects} />
              }}
            </Query>
          </HashRouter>
        </ApolloProvider>
      </HashRouter>
    </Provider>
  </React.Fragment>
  , document.getElementById('root'));
registerServiceWorker();