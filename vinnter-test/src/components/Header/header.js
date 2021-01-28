import React, { useState, useEffect}  from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//CSS
import './styles/stylesHeader.css';

function Header() {
    const [carsList, setCarsList] = useState(["test"]);

    useEffect( () => { 
       console.log(carsList)
     
     },[]) //useEffect 1 
  return (
    <div className="header-div">
        <img className="header-logo" src="https://vinnter.se/wp-content/uploads/2018/09/vinnter-logo-502x246x300dpi-300x145.png"/>
        <div className="social-links">
            <a href="#" class="fa fa-linkedin"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-facebook"></a>
            <i class="fa fa-envelope"></i>
        </div>
    </div>
  );
}

export default Header;
