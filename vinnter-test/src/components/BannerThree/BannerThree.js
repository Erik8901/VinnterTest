import React from 'react'

//CSS
import './styles/stylesBannerThree.css'

function BannerThree() {
  return (
    <div className="BannerThree-div">
        <span className="banner-three-title">What we do</span>
            <div className="banner-three-info-divs">
                <div className="info-div">
                    <span className="info-title">Prototyping</span>
                        <div className="info-text-div">
                            <span className="info-text">
                            It is easy to dash into a complete darkness with a great idea. Through prototyping we create insight and help our customers to early understand what they actually want and how it should be delivered to their end users.
                            </span>
                        </div>
                  </div>
            <div className="info-div">
                <span className="info-title">Innovation</span>
                    <div className="info-text-div">
                        <span className="info-text">
                            An innovation is an invention brought to a market. By adding value work to a new or common product or service,  we help traditional industries to create new connected products and digital services that redefines their market.
                        </span>
                      </div>
                   </div>
            <div className="info-div">
                <span className="info-title">Development</span>
                    <div className="info-text-div">
                        <span className="info-text">
                            Through our broad competence base, ranging from the hardware design to the cloud based software service and  user interface, we bring our skilled and experienced teams of developers and engineers to the table and start developing top class products and services.
                        </span>
                    </div>
              </div>
          </div>
    </div>
  );
}

export default BannerThree;
