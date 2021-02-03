import React from 'react';

//CSS
import './styles/stylesMainMenuDesktop.css'

function MainMenuDesktop() {
 
  return (
      <div className="MainMenuDesktop-div" >
          <div className="links-desktop">
              <a href="/home" className="link-start-desktop">Start</a>
              <a href="/about" className="link-desktop">Content<i className="fa fa-angle-down"></i></a>
              <a href="/contact" className="link-desktop">About<i className="fa fa-angle-down"></i></a>
              <a href="/contact" className="link-desktop">Career<i className="fa fa-angle-down"></i></a>
              <a href="/contact" className="link-desktop">Contact<i className="fa fa-angle-down"></i></a>
      </div>
    </div>
  );
}

export default MainMenuDesktop;


