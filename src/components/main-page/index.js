import React from 'react';
import styles from './style.scss';
import { Link } from 'react-router-dom';

class MainPage extends React.Component {
  render() {
    return (
      <div className={styles['container-inner']}>
        <div className={styles['image']}></div>
        <div className={styles['projects']}>
          <div className={styles['title']}>All projects</div>
          <ul className={styles['list']}>
            <li>
              <Link to={`/project/${1}`}>Another project name</Link> as Frontend Developer
            </li>
            <li>
              <a href="">Project name</a> as UX/UI Designer
            </li>
            <li>
              <a href="">Mix#001</a> as Music Producer
            </li>
            <li>
              <a href="">Another project name</a> as Frontend Developer
            </li>
            <li>
              <a href="">Project name</a> as UX/UI Designer
            </li>
            <li>
              <a href="">Mix#001</a> as Music Producer
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MainPage;
