import React from 'react';

//CSS
import './styles/stylesMainMenuMobile.css';

function MainMenuMobile() {
 
  return (
    <div className="MainMenuMobile-div" >
      <div className="links">
        <a href="/" className="link-mobile">Start<i className="fa fa-angles-down"></i></a>
        <a href="/about" className="link-mobile">Content<i className="fa fa-angles-down"></i></a>
        <a href="/contact" className="link-mobile">About<i className="fa fa-angles-down"></i></a>
        <a href="/contact" className="link-mobile">Career<i className="fa fa-angles-down"></i></a>
        <a href="/contact" className="link-mobile">Contact<i className="fa fa-angles-down"></i></a>
      </div>
    </div>
  );
}

export default MainMenuMobile;

