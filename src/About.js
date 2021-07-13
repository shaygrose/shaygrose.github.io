import React, {Component} from 'react';
import './About.css';
import './index.css';


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
      <div class="About page-content">
        <div id="page-wrap">
          <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Amatic+SC" />
          <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"/> 
          <header className="page-header">
            <h2>About Me</h2>
          </header>
  
          <div class="bio">
  
            <p>Hi! I'm Shayna, and I'm a Software Developer.</p>
            <p>I'm {this.getCurrentAge()} years old, and from Maple Ridge, B.C. I attended Simon Fraser University, where I graduated with my Bachelor's Degree in Computing Science after 4 <strike>long</strike> <strike>arduous</strike> fun years.</p>
            <p>I'm an easy going person, who loves to work in teams and gets along well with others. I'm always up for a challenge and looking for new things to learn! In my free time I love to read sci-fi books with a good cup of coffee, or some sparkling water. After work you can find me outside exploring, or playing video games with friends.</p>
  
  
          </div>
        
        </div>
      </div>
    )
  }
  
 

}


export default About;
