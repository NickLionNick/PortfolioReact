import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Courses extends Component {
    state = {
        move: 0,
        move2: 0,

    }

    Animation(key, time) {
        setTimeout(() => this.setState({[key]: 1}), time)
    }
    componentDidMount() {
        this.Animation("move", 2000)

    }
  render() {
      const {move,} = this.state
    return(
      <Grid style={{
          opacity: `${move}`,
          transition:"1s",

      }}>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
          <p>{this.props.jobDescription}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Courses;
