import React, {Component} from 'react';
import {Cell, Grid} from "react-mdl";


class LandingPage extends Component {
    state = {
        move: 0,
        move2: 0,
        move3: 0,
        move4: 0,
        move5: 0,
        step:1/10
    }

    Animation(key, time) {
        setTimeout(() => this.setState({[key]: 1}), time)
    }

    // Animation() {
    //     const {move, step} = this.state
    //     setTimeout(() => {
    //         if(move>0) {
    //             this.Animation()
    //             this.setState({move: move - step})
    //         }
    //     }, 50)
    // }

    // Animation(start=3000, time=50) {
    //     const {move, step} = this.state
    //     setTimeout(() => {
    //         if(move<=1) {
    //             this.Animation()
    //             this.setState({move: move + step})
    //         }
    //     }, move>=0.1?time:start)
    // }

    componentDidMount() {
        this.Animation("move", 500)
        this.Animation("move2", 1000)
        this.Animation("move3", 1500)
        this.Animation("move4", 2000)
        this.Animation("move5", 2500)
    }

    render() {
        const {move, move2,move3, move4,move5} = this.state
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://inn.spb.ru/images/000/DSC100034871.png"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1 style={{
                                opacity: `${move}`,
                                // marginLeft:`${move}%`
                            }}>Front_End Developer</h1>
                            <hr style={{
                                opacity: `${move}`,

                            }} />
                            <p style={{
                                opacity: `${move2}`,
                                transition: "1s"
                            }}> HTML/CSS | JavaScript | React | </p>

                            <div className="social-links">

                                {/*GitHub*/}
                                <a style={{
                                    opacity: `${move3}`,
                                    transition: "1s"
                                }}
                                   href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>

                                {/*Instagram*/}
                                <a style={{
                                    opacity: `${move4}`,
                                    transition: "1s"
                                }} href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>

                                {/*LinkedIn*/}
                                <a style={{
                                    opacity: `${move5}`,
                                    transition: "1s"
                                }} href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                                </a>

                            </div>
                        </div>
                        s

                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;