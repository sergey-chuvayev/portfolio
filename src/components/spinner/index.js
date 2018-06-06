import React from 'react';
import styles from './style.scss';

const Spinner = () => {
  return (
    <div className={styles['la-ball-scale-pulse']}>
        <div></div>
        <div></div>
    </div>
  )
}

export default Spinner;
