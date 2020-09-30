import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
    state = {
        move3: 0,


    }

    Animation(key, time) {
        setTimeout(() => this.setState({[key]: 1}), time)
    }
    componentDidMount() {
        this.Animation("move3", 3000)

    }
  render() {
      const {move3,} = this.state
    return(
      <Grid  style={{
          opacity: `${move3}`,
          transition:"1s",
          // marginLeft:`${move}%`
      }}>
        <Cell col={12}>
          <div style={{display: 'flex'}}>{this.props.skill} <ProgressBar style={{margin: 'auto', width: '75%'}} progress={this.props.progress} /> </div>
        </Cell>
      </Grid>
    )
  }
}

export default Skills;
