import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div>

       
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
    <CardTitle expand style={{color: '#ffff', background: 'url(https://image.freepik.com/free-photo/back-school-education-banner-background_8087-1192.jpg) bottom right 15% no-repeat #46B6AC'}}>Twitter Search Engine</CardTitle>
    <CardText>
    Developed a complete IR search engine system on twitter data (3,00,000 tweets) crawled using Twitter API and indexed using Solr
    </CardText>
    <CardActions border>
    <a href="https://github.com/SankeerthTella/TwitterSearchEngine" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square fa-2x" aria-hidden="true" />
          </a>
    </CardActions>
</Card>

          {/* Project 2 */}
          <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
    <CardTitle expand style={{color: '#ffff', background: 'url(https://image.freepik.com/free-photo/back-school-education-banner-background_8087-1192.jpg) bottom right 15% no-repeat #46B6AC'}}>Distributed Messenger Application</CardTitle>
    <CardText>
    Incorporated messaging features by implementing asynchronous thread pool and serial executives, that
handled with client socket operations
    </CardText>
    <CardActions border>
    <a href="https://github.com/SankeerthTella/DistributedMessengerApplication" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square fa-2x" aria-hidden="true" />
          </a>
    </CardActions>
</Card>

          {/* Project 3 */}
          <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
    <CardTitle expand style={{color: '#ffff', background: 'url(https://image.freepik.com/free-photo/back-school-education-banner-background_8087-1192.jpg) bottom right 15% no-repeat #46B6AC'}}>Big Data Processing with Hadoop</CardTitle>
    <CardText>
    Various Text processing tasks like N-grams, Inverted Index, Relational Join, Word Count, KNN algorithm were implemented from scratch using Hadoop MapReduce algorithm
    </CardText>
    <CardActions border>
    <a href="https://github.com/SankeerthTella/Hadoop" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square fa-2x" aria-hidden="true" />
          </a>
    </CardActions>
</Card>
         
        </div>
        <br></br>
         <div className="projects-grid">
         {/* Project 1 */}
         <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
    <CardTitle expand style={{color: '#ffff', background: 'url(https://image.freepik.com/free-photo/back-school-education-banner-background_8087-1192.jpg) bottom right 15% no-repeat #46B6AC'}}>Predictive Analytics with Spark</CardTitle>
    <CardText>
    Implemented an end-to-end predictive analytics pipeline using Apache Spark to predict the genre of the movie
    </CardText>
    <CardActions border>
    <a href="https://github.com/SankeerthTella/MovieGenre" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square fa-2x" aria-hidden="true" />
          </a>
    </CardActions>
</Card>

         {/* Project 2 */}
         <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
    <CardTitle expand style={{color: '#ffff', background: 'url(https://image.freepik.com/free-photo/back-school-education-banner-background_8087-1192.jpg) bottom right 15% no-repeat #46B6AC'}}>Social Networking Site - SNIST HUB</CardTitle>
    <CardText>
    Developed social networking platform which brings education, activities under single roof by connecting students and professors
    </CardText>
    <CardActions border>
    <a href="https://github.com/SankeerthTella/SNIST_HUB" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square fa-2x" aria-hidden="true" />
          </a>
    </CardActions>
</Card>

         {/* Project 3 */}
         <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
    <CardTitle expand style={{color: '#ffff', background: 'url(https://image.freepik.com/free-photo/back-school-education-banner-background_8087-1192.jpg) bottom right 15% no-repeat #46B6AC'}}>Multi K8S</CardTitle>
    <CardText>
    Deployed a multi-container app into GCP Kubernetes engine using Travis CI and handled traffic using Ingress-Nginx, Helm
    </CardText>
    <CardActions border>
    <a href="https://github.com/SankeerthTella/Multi_Container_Kubernetes" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square fa-2x" aria-hidden="true" />
          </a>
    </CardActions>
</Card>
        
       </div>
       </div>

      )
    } 

  }



  render() {
    return(
      <div>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
