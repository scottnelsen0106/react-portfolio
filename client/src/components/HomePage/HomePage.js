import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Homepage extends Component {
    render() {
        return (
            <div style ={{width: '100%', margin: 'auto'}}>
               <Grid className="Landing-grid">
                   <Cell col={12}>
                       <img src="/Images/portfolio-image.jpg"
                       alt="portfolio-image"
                       className="portfolio-image"/>

                       <div className="about-me-text">
                           <h1>Web Developer</h1>
                           <p>Hello, my name is Scott Nelsen. I am a full-stack MERN developer from Nashville, TN.</p>
                           
                           <h2>Skills</h2>
                           
                           <p>HTML/CSS | Javascript | React | Node | Express | MySQL | MongoDB | Git | GitHub</p>

                           <hr />

                           <div className="icons">
                                  <a href="https://github.com/scottnelsen0106" target="_blank"rel="noopener noreferrer">
                                        <i className="fa fa-github"></i>
                                  </a>

                                  <a href="https://www.linkedin.com/in/scott-nelsen-5275a1194/" target="_blank" rel="noopener noreferrer">
                                      <i className="fa fa-linkedin"></i>
                                  </a>

                                  <a href="mailto:snelsen0106@gmail.com" target="_blank" rel="noopener noreferrer">
                                      <i className="fa fa-envelope"></i>
                                  </a>
                           </div>
                       </div>
                   </Cell>
                </Grid> 
            </div>
        )
    }
}

export default Homepage;