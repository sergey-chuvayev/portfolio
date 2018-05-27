import React from 'react';
import styles from './style.scss';



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
  }

  render() {
    return (
      <div className={styles['container-inner']}>
        <div className={styles['top']}>
          <div className={styles['desc']}>
            <div className={styles['title']}>
              Project Title
            </div>
            <div className={styles['text']}>
              Eadweard James Muybridge was an English photographer important for his pioneering work in photographic studies of motion and in motion-picture projection.
            </div>
            <div className={styles['list']}>
              <ul>
                <li>Published: 12.01.2008</li>
                <li>Category: Artworks</li>
              </ul>
            </div>
            <div className={styles['navigation']}>
              <div className={styles['prev']}>&lt; previous project</div>
              <div className={styles['next']}>next project &gt;</div>
            </div>
          </div>
          <div className={styles['content']}>
            <div className={styles['content-inner']}>
              {this.images.map((image, i) =>
                <div className={styles['img']}>
                  <img key={i} src={image} />
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
