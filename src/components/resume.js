import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/large-2479-s-classsaloon.jpg"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Sankeerth Tella</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
      <p>Strong in design and integration with intuitive problem-solving skills. Proficient in JAVA, PYTHON, JAVASCRIPT, and SQL. Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions. Looking to start the career as an entry-level software engineer with a reputed firm driven by technology.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>25 Callodine Ave, Buffalo, NY, 14226</p>
            <h5>Phone</h5>
            <p>(716) 770-8204</p>
            <h5>Email</h5>
            <p>tellasankeerth@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2019}
              endYear={2021}
              schoolName="University at Buffalo - SUNY"
              schoolDescription="Masters in Computer & Information Sciences"
               />

               <Education
                 startYear={2015}
                 endYear={2019}
                 schoolName="Sreenidhi Institute of Science & Technology"
                 schoolDescription="Bachelors in Computer Science & Engineering"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2020}
              endYear={2020}
              jobName="Project Assistant at Data Intensive Distributed Computed Lab, UB"
              jobDescription="Worked on web development project sponsored by IBM and NSF to built ODS (OneDataShare), fast and secure file transfer
              between various cloud platforms, under the guidance of Dr.Tevfik Kosar. Implemented command line interface for executing various SFTP commands in the web interface. Developed front-end using React and back-end using Spring Boot. Used Java Secure Channel to connect to SSH2 server. Redesigned the front-end components and solved various UI bugs"
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Software Developer Intern at Cognizant Technology Solutions"
                jobDescription="Worked on a Dynamic Web Service called ‘Dose Car Servicing’ which provides door to door car servicing, developed using JSP, Spring Boot, Bootstrap. Lead a team of four and contributed majorly on building the end-to-end application. Adopted scrum framework from agile methodology for developing the project"
                />
                <Experience
                startYear={2012}
                endYear={2016}
                jobName="Software Developer Intern at Path Creators Private Limited"
                jobDescription="Developed Automated Irrigation Cloud System using various machine learning algorithms with minimal processing time. Worked on developing a front-end interface for static machine learning pipeline to analyze the requirement of recharge of ground
                water based on input data from sensor"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="java"
                progress={90}
                />
                <Skills
                skill="Spring Boot"
                progress={80}
                />
                <Skills
                skill="Python"
                progress={70}
                />
              <Skills
                skill="javascript"
                progress={70}
                />
                <Skills
                  skill="React"
                  progress={80}
                  />
                  <Skills
                skill="Git"
                progress={70}
                />
                <Skills
                skill="SQL"
                progress={60}
                />
                  <Skills
                    skill="Docker"
                    progress={50}
                    />
                    <Skills
                      skill="Kubernetes"
                      progress={50}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
