import React from 'react';
import styles from './style.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles['container']}>
        <div className={styles['item']}>
          You’re watching the portfolio of Sergey Chuvayev
        </div>
        <div className={styles['item']}>
          <a href="facebook.com" target="_blanc">facebook</a>,&nbsp;
          <a href="facebook.com" target="_blanc">soundcloud</a>,&nbsp;
          <a href="facebook.com" target="_blanc">instagram</a>
        </div>
        <div className={styles['item']}>
          <a href="mailto: sergeypanic@gmail.com" target="_blanc">sergeypanic@gmail.com</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
