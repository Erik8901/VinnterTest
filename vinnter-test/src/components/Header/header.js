import React, { useState, useEffect}  from 'react'

import MainMenuMobile from '../MainMenu/MainMenuMobile'
import MainMenuDesktops from '../MainMenu/MainMenuDesktops'

//CSS
import './styles/stylesHeader.css';

function Header() {
  const [showMenu, setShowMenu] = useState(false)

    useEffect( () => { 
     
    },[]) //useEffect 1 
  return (
    <div className="header-div">
        <img className="header-logo" alt="img" src="https://vinnter.se/wp-content/uploads/2018/09/vinnter-logo-502x246x300dpi-300x145.png"/>
        <div className="social-links">
            <a href="https://www.linkedin.com/company/vinnter-ab/"> <i className="fa fa-linkedin" target="_blank" rel="noopener noreferrer" /></a>
            <a href="https://twitter.com/VinnterAB"> <i className="fa fa-twitter" target="_blank" rel="noopener noreferrer" /></a>
            <a href="https://www.facebook.com/vinnterab/"> <i className="fa fa-facebook" target="_blank" rel="noopener noreferrer" /></a>
            <a href="mailto:webmaster@example.com"> <i className="fa fa-envelope" /></a>
        </div>
          <i className="fa fa-bars" onClick={() => setShowMenu(!showMenu)}></i>
        <div className="desktop-menu">
          <MainMenuDesktops />
        </div>
         { showMenu && <MainMenuMobile /> }
    </div> 
  );
}

export default Header;
