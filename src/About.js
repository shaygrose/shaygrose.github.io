import React, {Component} from 'react';
import './About.css';
import './index.css';
import headshot from './headshot.jpeg';
import headshotalt from './headshot-alt.JPG';


class About extends Component{

  constructor(props){
    super(props);
    this.getCurrentAge = this.getCurrentAge.bind(this);
  }

  getCurrentAge() {
    var today = new Date();
    var birthday = new Date("June 9, 1998");
    var age = today.getFullYear() - birthday.getFullYear();
    var month = today.getMonth() - birthday.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }
    return age;
  }

  render() {
    return (
      <div className="About page-content">
        <div id="page-wrap">
          <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Amatic+SC" />
          <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"/> 
          <header className="page-header">
            <h2>About Me</h2>
          </header>
  
          <div className="bio">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img className="headshot" alt="headshot" src={headshot}/>
                </div>
                <div className="flip-card-back">
                  <img className="headshot-alt" alt="alternate headshot" src={headshotalt}/>
                </div>
              </div>
            </div>
            <p>Hi! I'm Shayna, and I'm a Software Developer.</p>
            <p>I'm {this.getCurrentAge()} years old, and from Vancouver, B.C. I attended Simon Fraser University, where I graduated in 2021 with my Bachelor's Degree in Computing Science.</p>
            <p>I'm an easy going person, who loves to work in teams and gets along well with others. I'm always up for a challenge and looking for new things to learn! In my free time I love reading and watching sci-fi. After work you can find me outside exploring, or trying out a new recipe in the kitchen.</p>
  
  
          </div>
        
        </div>
      </div>
    )
  }
  
 

}


export default About;
