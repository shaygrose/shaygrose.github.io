import React from 'react';
import './Contact.css';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



function Contact() {
  return (
    <div className="Contact page-content">
      
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Amatic+SC" />
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"/> 
        <header className="page-header">
          <h2>Say Hello</h2>
          <p>Feel free to contact me, even if you just want to chat!</p>
        </header>

        <div className="contact-icons">
					  <a href="mailto:shaynagrose@gmail.com" type="button" className="button button--sacnite">
              <i className="fa fa-envelope mail-icon fa-3x"></i>
            </a>
					  <a href="tel:7788375987" type="button" className="button button--sacnite">
              <i className="fa fa-mobile-alt phone-icon fa-3x"></i>
            </a>
					  <a href="https://www.linkedin.com/in/shayna-grose-0/" target="_blank" rel="noreferrer" type="button" className="button button--sacnite">
              <i className="fab fa-linkedin-in li-icon fa-3x"></i>
            </a>
					  <a href="https://github.com/shaygrose" target="_blank" rel="noreferrer" type="button" className="button button--sacnite">
              <i className="fab fa-github gh-icon fa-3x"></i>
            </a>
				</div>
    </div>
  );
}




export default Contact;
