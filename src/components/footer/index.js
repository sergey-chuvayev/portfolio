import React from 'react';
import styles from './style.scss';
import classnames from 'classnames';
import { observer, inject } from 'mobx-react';

@inject('uiStore')
@observer
class Footer extends React.Component {
  render() {
    return (
      <footer className={classnames(styles['container'])}>
        <div className={styles['item']}>
          You’re watching the portfolio of Sergey Chuvayev  {this.props.uiStore.currentPage}
        </div>
        <div className={styles['item']}>
          <a href="https://www.linkedin.com/in/sergeychuvayev/" target="_blanc">linkedin</a>,&nbsp;
          <a href="https://www.facebook.com/sergeychuvayev" target="_blanc">facebook</a>,&nbsp;
          <a href="https://soundcloud.com/sergeyaugust" target="_blanc">soundcloud</a>,&nbsp;
          <a href="https://github.com/sergey-chuvayev/" target="_blanc">github</a>,&nbsp;
          <a href="https://storage.googleapis.com/sergeychuvayevportfolioimages/cv.pdf" target="_blanc">CV</a>
        </div>
        <div className={styles['item']}>
          <a href="mailto: sergeypanic@gmail.com" target="_blanc">sergeypanic@gmail.com</a>
        </div>
      </footer>
    );
  }
};

export default Footer;
