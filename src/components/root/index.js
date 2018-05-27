import React from 'react';
import styles from './style.scss';
import Header from '../header';
import Footer from '../footer';
import Content from '../content';

class Root extends React.Component {
	render() {
		return (
			<div className={styles['root-container']}>
				<Header />
        <Content />
        <Footer />
			</div>
		);
	}
}

export default Root;
