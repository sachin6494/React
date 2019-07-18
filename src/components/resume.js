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
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Sachin Sharma</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I am a technology geek. I want to use and share my experience and knowledge for your firm and explore and nourish myself with your valuable guidance in the technical domain.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Shiv nagar ram leela ground agra road Mainpuri</p>
            <h5>Phone</h5>
            <p>(827) 319-3200</p>
            <h5>Email</h5>
            <p>sachinsharma6494@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              degree="B.Sc(Voc)"
              startYear={2012}
              endYear={2015}
              schoolName="Dau Daya Institute Of Vocational Education Khandari, Agra"
              schoolDescription="Dau Dayal Institute of Vocational Education, located at Khandari campus of Dr B R Ambedkar University, in Agra, Uttar Pradesh, was established to promote an inquisitive thinking towards vocational education. The institute constitutes five distinguished departments, namely Computer Applications; Instrumentation; Optical Instrumentation; Mathematics; and Advertising, Sales Promotion & Sales Management to provide qualitative education."
               />
               <Education
               	 degree="M.C.A"
                 startYear={2007}
                 endYear={2009}
                 schoolName="Ajay Kumar Garg Engineering Collage Ghaziabad "
                 schoolDescription="Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad is affiliated to Dr. A.P.J. Abdul Kalam Technical University, Lucknow, and is approved by the All India Council for Technical Education. The college was established in 1998 and offers B.Tech courses in seven disciplines of Engineering namely Computer Science and Engineering, Information  Technology, Electronics and Communication Engineering, Electronics and Instrumentation Engineering, Electrical and Electronics Engineering, Mechanical Engineering and Civil Engineering. The college also offers M.Tech in Automation and Robotics, Electronics & Communication Engineering, Computer Science, Electrical and Electronics Engineering and Mechanical Engineering. The college is accredited by NAAC."
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Experience</h2>
            <Experience
              company="CEBS World Wide"
              startYear={2017}
              endYear={2017}
              jobName="Software Engineer Trainee"
              jobDescription="I have done front end as well as back end development and also provide training of the given product."
              />
              <Experience
                company="Orasis Infotech Private Limited"
                startYear={2018}
                endYear={2018}
                jobName="Junior Software Engineer"
                jobDescription="I have done front end as well as back end development and also provide training of the given product. I also implement software in client's server as well as our server if required and also fetch data from SQL database according to clients requirement."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                  skill="C#"
                  progress={50}
                  />
              <Skills
                skill="javascript"
                progress={60}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={70}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={30}
                    />
                    <Skills
                      skill="React"
                      progress={50}
                      />
                      <Skills
                      skill="SQL"
                      progress={70}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;