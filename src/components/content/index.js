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
          <Route path="/" exact render={() => <MainPage projects={this.props.data.projects} />} />
          <Route data={this.props.data} path="/project/:id" component={ProjectPage} />
          <Route component={MainPage} />
        </Switch>
      </div>
    );
  }
}

export default Content;
