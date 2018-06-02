import React from 'react';
import styles from './style.scss';
import classnames from 'classnames';

const Splash = (props) => {
  return (
    <div className={classnames(styles['container'], { [styles['is-hidden']]: props.invisible })}>
      <div className={styles['logo']}>
        <span>Sergey Chuvayev</span>
        <span>Portfolio</span>
      </div>
    </div>
  );
}

export default Splash;
