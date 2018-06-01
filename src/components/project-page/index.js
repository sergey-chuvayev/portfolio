import React from 'react';
import styles from './style.scss';
import data from '../../mock-data.js';


class ProjectPage extends React.Component {
  constructor(props) {
    super(props);

    this.images = [
      'https://i.pinimg.com/564x/4b/1f/0b/4b1f0b38f918213a1009d63fcbd049b8.jpg',
      'https://i.pinimg.com/564x/a7/9b/1a/a79b1a3fb2ff57da98f343b8e9ec7151.jpg',
      'https://i.pinimg.com/564x/a6/1b/a1/a61ba1313d81b1fc935c2f0798587e67.jpg',
      'https://i.pinimg.com/564x/a6/48/ba/a648ba83f3b0ad99abe18b6c98ab14dd.jpg',
      'https://i.pinimg.com/564x/f9/55/a3/f955a316c6c3f822459a8e9dae0759ae.jpg',
      'https://i.pinimg.com/564x/d3/20/3a/d3203af31412b648722d77a82e71517f.jpg',
      'https://i.pinimg.com/564x/3a/ba/95/3aba95640eb0f209d22753999d1d595a.jpg',
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
    const parsedStart = startDate && `${startDate.getUTCFullYear()}/${startDate.getUTCMonth()+1}/${startDate.getUTCDate()}`;
    const parsedEnd = endDate && `${endDate.getUTCFullYear()}/${endDate.getUTCMonth()+1}/${endDate.getUTCDate()}`;
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
                <li>Dates: {dates}</li>
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
