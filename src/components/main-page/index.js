import React from 'react';
import styles from './style.scss';
import { Link } from 'react-router-dom';
import mockData from '../../mock-data.js';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryName: 'All Projects'
    }
  }

  setCurrentCategory() {
    let catName = this.props.match.params.category;
    if (!catName)
      catName = 'All Projects';
    this.setState({
      categoryName: catName
    });
  }

  componentDidMount() {
    this.setCurrentCategory();
  }

  componentDidUpdate(props) {
    if (this.props.match !== props.match) {
      this.setCurrentCategory();
    }
  }

  render() {

    //reduce projects
    const projects = mockData.projects.reduce((list, project) => {
      if (project.category.includes(this.state.categoryName)
          || this.state.categoryName === 'All Projects')
        return [...list, project];
      return list;
    }, []);

    return (
      <div className={styles['container-inner']}>
        <div className={styles['projects']}>
          <div className={styles['title']}>
            { this.state.categoryName }
          </div>
          <ul className={styles['list']}>
            {projects.map((project, i) =>
              <li key={i}>
                <Link to={`/project/${project.id}`}>{project.name}</Link> as {project.role}
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default MainPage;
