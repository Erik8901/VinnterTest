import React from 'react';

//CSS
import './styles/stylesMainMenuDesktop.css'

function MainMenuDesktop() {
 
  return (
    <div className="MainMenuDesktop-div" >
      <div className="links-desktop">
        <a href="/home" className="link">Start<i className="fa fa-angle-down"></i></a>
        <a href="/about" className="link">Content<i className="fa fa-angle-down"></i></a>
        <a href="/contact" className="link">About<i className="fa fa-angle-down"></i></a>
        <a href="/contact" className="link">Career<i className="fa fa-angle-down"></i></a>
        <a href="/contact" className="link">Contact<i className="fa fa-angle-down"></i></a>
      </div>
    </div>
  );
}

export default MainMenuDesktop;


