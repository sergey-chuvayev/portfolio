import React from 'react';
import styles from './style.scss';
import Header from '../header';
import Footer from '../footer';
import Content from '../content';
import mockData from '../../mock-data.js';

class Root extends React.Component {
	render() {
		return (
			<div className={styles['root-container']}>
				<Header data={mockData} />
        <Content data={mockData} />
        <Footer />
			</div>
		);
	}
}

export default Root;
