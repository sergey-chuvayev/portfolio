import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';
import renderHTML from 'react-render-html';
import data from '../../mock-data.js';


class ProjectPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      project: {},
      imageStatus: 'loading'
    }
  }

  handleImageLoaded() {
    this.setState({ imageStatus: 'loaded' });
  }

  handleImageErrored() {
    this.setState({ imageStatus: 'failed to load' });
  }

  componentDidMount() {
    const projectId = parseInt(this.props.match.params.id);
    this.setState({
      project: data.projects.find((project) => {
        if (project.id === projectId) {
          return project;
        }
      })
    });
  }

  render() {

    // dates make soon
    // const startDate = this.state.project.startDate;
    // const endDate = this.state.project.endDate;
    // const parsedStart = startDate && `${startDate.getUTCDate()}.${startDate.getUTCMonth()+1}.${startDate.getUTCFullYear()}`;
    // const parsedEnd = endDate && `${endDate.getUTCDate()}.${endDate.getUTCMonth()+1}.${endDate.getUTCFullYear()}`;
    // const dates = `${parsedStart} - ${parsedEnd}`;

    return (
      <div className={styles['container-inner']}>
        <div className={styles['top']}>
          <div className={styles['desc']}>
            <div className={styles['title']}>
              { this.state.project.name }
            </div>
            <div className={styles['text']}>
              { this.state.project.description }
            </div>
            <div className={styles['text']}>
              {this.state.project.roleDescription ?
                  <div className={styles['role']}>
                    <b>Role:</b> {this.state.project.roleDescription}
                  </div>
              : false}
            </div>
            <div className={styles['list']}>
              <ul>
                {/*<li>{dates}</li>*/}
                <li>Category: {Array.isArray(this.state.project.category)
                              && this.state.project.category.map((item, i) => <span>{item}</span>)}
                </li>
                <li>
                  <a href={this.state.project.url} target="_blank">{this.state.project.url}</a>
                </li>
              </ul>
            </div>
            <div className={styles['navigation']}>
              <div className={styles['prev']} onClick={() => this.props.history.goBack()}>&lt; back</div>
            </div>
          </div>
          <div className={styles['content']}>
            <div className={styles['content-inner']}>
              {this.state.project.category && this.state.project.category.includes('music') ? (
                <div className={styles['music']}>
                  {this.state.project.iframes.map((iframe, i) =>
                    <div className={styles['music-item']}>
                      {renderHTML(iframe)}
                    </div>
                  )}
                </div>
              ) :
                this.state.project.images && this.state.project.images.map((image, i) =>
                  <div key={i} className={styles['img']}>
                    <img src={image} />
                  </div>)
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectPage;
