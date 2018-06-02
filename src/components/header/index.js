import React from 'react';
import styles from './style.scss';
import { Link } from 'react-router-dom';
import mockData from '../../mock-data.js';

class Header extends React.Component {
	render() {
		return (
			<header className={styles['header-container']}>
				<div className={styles['logo']}>
          <Link to="/" exact="true">Portfolio</Link>
        </div>
        <div className={styles['divider']}></div>
        <div className={styles['menu']}>
          {mockData.categories.map((item, i) =>
            <React.Fragment key={i}>
              <Link to={`/${item}`} className={styles['item']}>
                {item}
              </Link>
              { mockData.categories.length - 1 !== i ?
                (<span className={styles['coma']}>, </span>)
              : false }
            </React.Fragment>
          )}
        </div>
			</header>
		);
	}
}

export default Header;
