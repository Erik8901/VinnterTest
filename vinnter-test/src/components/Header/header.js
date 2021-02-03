import React, { useState }  from 'react'

//components
import MainMenuMobile from '../MainMenu/MainMenuMobile'
import MainMenuDesktops from '../MainMenu/MainMenuDesktops'

//CSS
import './styles/stylesHeader.css';

function Header() {
  const [showMenu, setShowMenu] = useState(false)

   return (
    <div className="header-div">
        <a href="http://localhost:3000/home"><img className="header-logo" alt="img"  src="https://vinnter.se/wp-content/uploads/2018/09/vinnter-logo-502x246x300dpi-300x145.png"/>
        </a>
        <div className="social-links">
            <a href="https://www.linkedin.com/company/vinnter-ab/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a>
            <a href="https://twitter.com/VinnterAB" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"/></a>
            <a href="https://www.facebook.com/vinnterab/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"/></a>
            <a href="mailto:webmaster@example.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope"/></a>
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
