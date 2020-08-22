import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/large-2479-s-classsaloon.jpg"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Sankeerth Tella</h1>
             

            <hr/>

          <p>Java | Spring Boot | JavaScript | React | Python | SQL | MongoDB | Docker | Kubernetes</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/sankeerthtella/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="mailto:tellasankeerth@gmail.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-envelope-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/SankeerthTella" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

         

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
