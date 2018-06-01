import React from 'react';
import styles from './style.scss';
import Header from '../header';
import Footer from '../footer';
import Content from '../content';
import Splash from '../splash';


class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSplash: true
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ showSplash: false }), 3000);
  }

	render() {
		return (
			<div className={styles['root-container']}>
        {this.state.showSplash ? (
          <Splash />
        ) : false}
				<Header />
        <Content />
        <Footer />
			</div>
		);
	}
}

export default Root;
