import React from 'react'

//CSS
import './styles/stylesBannerFive.css'

function BannerFive() {
  
  return (
    <div className="BannerFive-div">
        <span className="team-title">Our Team</span>
            <div className="team-photo-container">
                <a href="https://vinnter.se/adam-gronberg/" className="photo-link">
                    <div className="photo-container" >
                        <div className="hidden-name">Adam Grönberg</div>
                        <img className="photo" alt="img" src="https://vinnter.se/wp-content/uploads/2020/04/Adam-Gr%C3%B6nberg-1152x1536.jpg" />
                    </div>
                </a>
                <a href="https://vinnter.se/andreas-angervik/" className="photo-link" >
                    <div className="photo-container" >
                        <div className="hidden-name">Andreas Angervik</div>
                        <img className="photo" alt="img" src="https://vinnter.se/wp-content/uploads/2020/04/Andreas-Angervik-1152x1536.jpg" />
                    </div>
                </a>
                <a href="https://vinnter.se/benedikt-ivarsson/" className="photo-link" >
                    <div className="photo-container" >
                        <div className="hidden-name">Benedikt Ivarsson</div>
                            <img className="photo" alt="img" src="https://vinnter.se/wp-content/uploads/2019/08/Benedikt-Invarsson-1200x1600x150dpi.jpg" />
                    </div>
                </a>
                <a href="https://vinnter.se/bjorn-adolfsson/" className="photo-link" >
                    <div className="photo-container" >
                        <div className="hidden-name">Björn Adolfsson</div>
                            <img className="photo" alt="img" src="https://vinnter.se/wp-content/uploads/2019/08/Bj%C3%B6rn-Adolfsson-1200x1600x150dpi.jpg" />
                    </div>
                </a>
                <a href="https://vinnter.se/christian-sanden/" className="photo-link">
                    <div className="photo-container" >
                        <div className="hidden-name">Christian Sanden</div>
                            <img className="photo" alt="img" src="https://vinnter.se/wp-content/uploads/2019/03/Christian-Sanden-1200x1600x150dpi.jpg" />
                      </div>
                </a>
                <a href="https://vinnter.se/eric-michelsen-ceo/" className="photo-link">
                    <div className="photo-container" >
                        <div className="hidden-name">Eric Michelsen</div>
                            <img className="photo" alt="img" src="https://vinnter.se/wp-content/uploads/2019/08/Eric-Michelsen-1200x1600x150dpi.jpg" />
                      </div>
                </a>
          </div>
    </div>
  );
}

export default BannerFive;
