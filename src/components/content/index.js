import React from 'react';
import styles from './style.scss';
import MainPage from '../main-page/';
import ProjectPage from '../project-page/';
import { Route, Switch, Redirect } from 'react-router-dom';

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles['container']}>
        <Switch>
          <Route path="/:category" exact component={MainPage} />
          <Route path="/project/:id" component={ProjectPage} />
          <Route path="/" component={MainPage} />
          <Route component={MainPage} />
        </Switch>
      </div>
    );
  }
}

export default Content;
