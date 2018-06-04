import React from 'react';
import styles from './style.scss';
import data from '../../mock-data.js';


class ProjectPage extends React.Component {
  constructor(props) {
    super(props);

    this.images = [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-205915.appspot.com/o/Screen%20Shot%202018-05-29%20at%2000.00.14.png?alt=media&token=81dc6577-c917-4977-a199-d0ba903de095',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-205915.appspot.com/o/Screen%20Shot%202018-05-29%20at%2000.00.14.png?alt=media&token=81dc6577-c917-4977-a199-d0ba903de095',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-205915.appspot.com/o/Screen%20Shot%202018-05-29%20at%2000.00.14.png?alt=media&token=81dc6577-c917-4977-a199-d0ba903de095',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-205915.appspot.com/o/Screen%20Shot%202018-05-29%20at%2000.00.14.png?alt=media&token=81dc6577-c917-4977-a199-d0ba903de095',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-205915.appspot.com/o/Screen%20Shot%202018-05-29%20at%2000.00.14.png?alt=media&token=81dc6577-c917-4977-a199-d0ba903de095',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-205915.appspot.com/o/Screen%20Shot%202018-05-29%20at%2000.00.14.png?alt=media&token=81dc6577-c917-4977-a199-d0ba903de095',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-205915.appspot.com/o/Screen%20Shot%202018-05-29%20at%2000.00.14.png?alt=media&token=81dc6577-c917-4977-a199-d0ba903de095',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-205915.appspot.com/o/Screen%20Shot%202018-05-29%20at%2000.00.14.png?alt=media&token=81dc6577-c917-4977-a199-d0ba903de095',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-205915.appspot.com/o/Screen%20Shot%202018-05-29%20at%2000.00.14.png?alt=media&token=81dc6577-c917-4977-a199-d0ba903de095',
    ];

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

    // dates
    const startDate = this.state.project.startDate;
    const endDate = this.state.project.endDate;
    const parsedStart = startDate && `${startDate.getUTCDate()}.${startDate.getUTCMonth()+1}.${startDate.getUTCFullYear()}`;
    const parsedEnd = endDate && `${endDate.getUTCDate()}.${endDate.getUTCMonth()+1}.${endDate.getUTCFullYear()}`;
    const dates = `${parsedStart} - ${parsedEnd}`;

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
                <li>{dates}</li>
                <li>Category: {this.state.project.category}</li>
              </ul>
            </div>
            {/*<div className={styles['navigation']}>
              <div className={styles['prev']}>&lt; previous project</div>
              <div className={styles['next']}>next project &gt;</div>
            </div>*/}
          </div>
          <div className={styles['content']}>
            <div className={styles['content-inner']}>
              {this.images.map((image, i) =>
                <div key={i} className={styles['img']}>
                  <img src={image} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectPage;
