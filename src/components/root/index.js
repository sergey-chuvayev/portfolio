import React from 'react';
import styles from './style.scss';
import Header from '../header';
import Footer from '../footer';

class Root extends React.Component {
	render() {
		return (
			<div className={styles['root-container']}>
				<Header />

        <Footer />
			</div>
		);
	}
}

export default Root;
