import React, { useState } from 'react';

//CSS
import './styles/stylesMainMenuDesktop.css'

function MainMenuDesktop() {
 
  return (
    <div className="MainMenuDesktop-div" >
      <div className="links-desktop">
        <a href="/" className="link">Start</a>
        <a href="/about" className="link">Content<i class="fa fa-angle-down"></i></a>
        <a href="/contact" className="link">About<i class="fa fa-angle-down"></i></a>
        <a href="/contact" className="link">Career<i class="fa fa-angle-down"></i></a>
        <a href="/contact" className="link">Contact<i class="fa fa-angle-down"></i></a>
      </div>
    </div>
  );
}

export default MainMenuDesktop;


