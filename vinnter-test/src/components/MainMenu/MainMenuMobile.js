import React from 'react';

//CSS
import './styles/stylesMainMenuMobile.css';


function MainMenuMobile() {
 
  
  return (
    <div className="MainMenuMobile-div" >
      <div className="links">
        <a href="/" className="link-mobile" style={{margin: '1rem'}} >Start </a>
        <a href="/about" className="link-mobile" style={{margin: '1rem'}}>Content</a>
        <a href="/contact" className="link-mobile" style={{margin: '1rem'}}>About</a>
        <a href="/contact" className="link-mobile" style={{margin: '1rem'}}>Career</a>
        <a href="/contact" className="link-mobile" style={{margin: '1rem'}}>Contact</a>
        </div>
    </div>
  );
}

export default MainMenuMobile;

