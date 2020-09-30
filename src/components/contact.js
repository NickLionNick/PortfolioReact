import React, {Component} from 'react';
import {Grid, Cell, List, ListItem,ListItemContent } from "react-mdl";

class Contact extends Component {
    state = {
        move: 0,
        move2: 0,


    }

    Animation(key, time) {
        setTimeout(() => this.setState({[key]: 1}), time)
    }
    componentDidMount() {
        this.Animation("move", 700)
        this.Animation("move2", 1500)


    }
    render() {
        const {move,move2,} = this.state
        return (
            <div className="contact-body" style={{
                opacity: `${move}`,
                transition:"1s",

            }}>
              <Grid className="contact-grid">
                  <Cell col={6}>
                      <h2>Nick Hubanov</h2>
                      <img
                      src="https://inn.spb.ru/images/000/DSC100034871.png"
                      alt="avatar"
                      style={{height: '250px'}}
                      />
                      <p style={{width:'75%', margin:'auto', paddingTop:'32px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>


                  </Cell>
                  <Cell col={6}>
                      <h2 style={{
                          opacity: `${move2}`,
                          transition:"1s",

                      }}>Contact Me</h2>
                      <hr style={{
                          opacity: `${move2}`,
                          transition:"1s",

                      }}/>

                      <div className="contact-list" style={{
                          opacity: `${move2}`,
                          transition:"1s",

                      }}>
                          <List>
                              <ListItem>
                                  <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton' }}>
                                      <i className=" fa fa-phone-square" aria-hidden="true"></i>
                                      (066)-425-69-25
                                  </ListItemContent>
                              </ListItem>
                              <ListItem>
                                  <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton' }}>
                                      <i className=" fa fa-envelope" aria-hidden="true"></i>
                                      nickgubanov@gmail.com
                                  </ListItemContent>
                              </ListItem>
                              <ListItem>
                                  <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton' }}>
                                      <i className=" fa fa-telegram" aria-hidden="true"></i>
                                      (066)-425-69-25
                                  </ListItemContent>
                              </ListItem>
                              <ListItem>
                                  <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton' }}>
                                      <i className="fa fa-whatsapp" aria-hidden="true"></i>
                                      (066)-425-69-25
                                  </ListItemContent>
                              </ListItem>

                          </List>
                      </div>



                  </Cell>
              </Grid>
            </div>
        );
    }
}

export default Contact;