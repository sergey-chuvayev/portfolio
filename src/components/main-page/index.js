import React from 'react';
import styles from './style.scss';
import { Link } from 'react-router-dom';

class MainPage extends React.Component {
  render() {
    return (
      <div className={styles['container-inner']}>
        <div className={styles['projects']}>
          <div className={styles['title']}>All projects</div>
          <ul className={styles['list']}>
            {this.props.projects.map((project, i) =>
              <li key={i}>
                <Link to={`/project/${project.id}`}>{project.name}</Link> as {project.role}
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default MainPage;
