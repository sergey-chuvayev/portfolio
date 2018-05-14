import React from 'react';
import './style.scss';
import Header from '../header';
import Footer from '../footer';

class Root extends React.Component {
	render() {
		return (
			<div className="root-container">
				<Header />
			</div>
		);
	}
}

export default Root;
