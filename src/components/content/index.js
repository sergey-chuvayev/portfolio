import React from 'react';
import styles from './style.scss';
import MainPage from '../main-page/';
import ProjectPage from '../project-page/';

import { Route, Switch, Redirect } from 'react-router-dom';

class Content extends React.Component {
  render() {
    return (
      <div className={styles['container']}>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/project/:id" component={ProjectPage} />
          <Route component={MainPage} />
        </Switch>
      </div>
    );
  }
}

export default Content;
