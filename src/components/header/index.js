import React from 'react';
import classnames from 'classnames';
import styles from './style.scss';
import { Link } from 'react-router-dom';

class Header extends React.Component {
	render() {
		return (
			<header className={styles['header-container']}>
				<div className={styles['logo']}>
          <Link to="/" exact="true">Portfolio</Link>
        </div>
        <div className={styles['divider']}></div>
        <div className={styles['menu']}>
          {this.props.data.categories.map((item, i) =>
            <React.Fragment key={i}>
              <span className={styles['item']}>{item}</span>
              { this.props.data.categories.length - 1 !== i ?
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
