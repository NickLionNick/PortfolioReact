import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Courses from './experience';
import Skills from './skills';


class Resume extends Component {
    state = {
        move: 0,
        move2: 0,
        move3: 0,

    }

    Animation(key, time) {
        setTimeout(() => this.setState({[key]: 1}), time)
    }
    componentDidMount() {
        this.Animation("move", 1000)
        this.Animation("move2", 2000)
        this.Animation("move3", 3000)

    }

  render() {

      const {move,move2,move3} = this.state
    return(
      <div style={{marginTop:"55px"}}>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://inn.spb.ru/images/000/DSC100034871.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Nick Hubanov</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Dnepr, Kotlyarevskogo 7a</p>
            <h5>Phone</h5>
            <p>(066) 425-69-25</p>
            <h5>Email</h5>
            <p>nickhubanov21@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2 style={{
                opacity: `${move}`,
                transition:"1s",

            }}>Education</h2>


            <Education
              startYear={2001}
              endYear={2012}
              schoolName="My School"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
               />

               <Education
                 startYear={2012}
                 endYear={20017}
                 schoolName="My University"
                 schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2 style={{
                  opacity: `${move2}`,
                  transition:"1s",
                  // marginLeft:`${move}%`
              }}>Courses</h2>

            <Courses
              startYear={2018}
              endYear={2019}
              jobName="ITStep Academy"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2  style={{
                  opacity: `${move3}`,
                  transition:"1s",
                  // marginLeft:`${move}%`
              }}>Skills</h2>
              <Skills
                skill="javascript"
                progress={65}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={75}
                  />
                     <Skills
                      skill="React"
                      progress={50}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
