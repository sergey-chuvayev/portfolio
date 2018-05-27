import React from 'react';
import styles from './style.scss';
import MainPage from '../main-page/';
import ProjectPage from '../project-page/';

class Content extends React.Component {
  render() {
    return (
      <div className={styles['container']}>
        {/*<MainPage />*/}
        <ProjectPage />
      </div>
    );
  }
}

export default Content;
