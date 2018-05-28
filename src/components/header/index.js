import React from 'react';
import classnames from 'classnames';
import styles from './style.scss';
import { Link } from 'react-router-dom';

class Header extends React.Component {
	render() {
		return (
			<header className={styles['header-container']}>
				<div className={styles['logo']}>
          <Link to="/" exact>Portfolio</Link>
        </div>
        <div className={styles['divider']}></div>
        <div className={styles['menu']}>
          <span className={styles['item']}>Design</span><span className={styles['coma']}>, </span>
          <span className={classnames(styles['item'], styles['is-active'])}>Web</span><span className={styles['coma']}>, </span>
          <span className={styles['item']}>Music</span><span className={styles['coma']}>, </span>
          <span className={styles['item']}>Artworks</span>
        </div>
			</header>
		);
	}
}

export default Header;
