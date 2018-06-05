import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';
import data from '../../mock-data.js';


class ProjectPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      project: {}
    }
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
              <div>Role:</div>
              { this.state.project.roleDescription }
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
              {this.state.project.images && this.state.project.images.map((image, i) =>
                <div key={i} className={styles['img']} style={{ backgroundImage: `url(${image})` }}></div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectPage;
