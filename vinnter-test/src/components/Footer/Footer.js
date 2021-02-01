import React from 'react'


//CSS
import './styles/stylesFooter.css'

function Footer() {
  return (
    <div className="Footer-div">
        <div className="company-details-container">
            <div className="company-contact-info">
                <div className="address">
                    <a href="https://www.google.com/maps/place/Vinnter/@57.7082456,11.9626629,15z/data=!4m5!3m4!1s0x0:0x11752a5767f71834!8m2!3d57.7082456!4d11.9626629?shorturl=1">
                        <span>Address</span></a>
                        <span>Kvarnbergsgatan 2</span>
                        <span>SE-411 05 GÖTEBORG</span>
                        <span>Sweden</span>
              </div>
              <div className="company-number">
                  <a href="https://www.google.com/maps/place/Vinnter/@57.7082456,11.9626629,15z/data=!4m5!3m4!1s0x0:0x11752a5767f71834!8m2!3d57.7082456!4d11.9626629?shorturl=1">
                      <span>Company</span></a>
                      <span>Registration number:</span>
                      <span>556860-1057</span>
              </div>
              <div className="mobile">
                  <span>Mobile</span>
                  <span>+46 (0)70 339‬‬‬ 82‬‬ 06</span>
              </div>
              <div className="VAT">
                  <span>VAT:</span>
                  <span>SE556860105701</span>
              </div>
            </div>
        <div className="send-email-container">
            <a href="https://www.google.com/maps/place/Vinnter/@57.7082456,11.9626629,15z/data=!4m5!3m4!1s0x0:0x11752a5767f71834!8m2!3d57.7082456!4d11.9626629?shorturl=1">
                <span>Newsletter</span></a>
                <span className="subscribe-text">Subscribe to get the news from Vinnter AB.</span>
                <span className="subscribe-text">We promise not to bother you too frequently!</span>
                    <div className="input-fields-user-name">
                        <input className="user-name-input" type="text" placeholder="First Name" />
                        <input className="user-name-input" type="text" placeholder="Last Name" />
                    </div>
                <div className="input-fields-user-email">
                    <input className="user-email-input" type="text" placeholder="Last Name" />
                <div className="btn-subscribe"><span>SUBSCRIBE</span></div>
              </div>
          </div>
        </div>
        <div className="google-map">
            <iframe className="iFrame-map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4262.934796712124!2d11.962681!3d57.708518000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff366d9c07a79%3A0x694f91b9b740e796!2sKvarnbergsgatan%202%2C%20411%2005%20G%C3%B6teborg%2C%20Sverige!5e0!3m2!1ssv!2sus!4v1612179588443!5m2!1ssv!2sus" ></iframe>
        </div>
        <div className="social-media-footer-links">
            <div className="footer-logo">
                <img className="logo" alt="img" src="https://vinnter.se/wp-content/uploads/2018/09/vinnter_vektor_vit.png"/>
            </div>
            <div className="footer-links">
                <a href="https://www.linkedin.com/company/vinnter-ab/"> <i className="fa fa-linkedin" target="_blank" rel="noopener noreferrer" /></a>
                <a href="https://twitter.com/VinnterAB"> <i className="fa fa-twitter" target="_blank" rel="noopener noreferrer" /></a>
                <a href="https://www.facebook.com/vinnterab/"> <i className="fa fa-facebook" target="_blank" rel="noopener noreferrer" /></a>
                <a href="mailto:webmaster@example.com"> <i className="fa fa-envelope" /></a>
            </div>
        </div>
    </div>
  );
}

export default Footer;
