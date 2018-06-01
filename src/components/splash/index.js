import React from 'react';
import styles from './style.scss';

class Splash extends React.Component {
  render() {
    return (
      <div className={styles['container']}>
        <div className={styles['logo']}>
          <span>Sergey Chuvayev</span>
          <span>Portfolio</span>
        </div>
      </div>
    );
  }
}

export default Splash;
