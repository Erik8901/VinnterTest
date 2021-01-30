import React from 'react'


//CSS
import './styles/stylesBannerFour.css'

function BannerFour() {
  return (
    <div className="BannerFour-div">
        <span className="banner-three-title">There are 3 main reasons behind successful IoT projects.</span>
        <div className="text-one-div">
          <span className="text-one">54% of businesses name the reason behind their projects’ success to be collaboration between IT and business.</span>
          <div className="text-container">
            <span className="text-two">49% of business leaders agree that a technology-focused culture contributes to an IoT project’s success.</span>
            <span className="text-three">48% of them also list IoT expertise as a major factor in their success on the Internet of Things market.</span>
          </div>
        </div>
        <div className="numbers-info-container">
            <div className="numbers-info">
                <span>94%</span>
                <div className="numbers-info-text">
                  <span>The amount of businesses that see an ROI on their IoT investment</span>
                </div>
            </div>
            <div className="numbers-info">
                <span>35%</span>    
                <div className="numbers-info-text">
                  <span>The share of IT leaders who believe IT security is considered to be the top barrier for success</span>
                </div>
            </div>
            <div className="numbers-info">
                <span>28%</span>
                <div className="numbers-info-text">
                  <span>The global market share of Smart Cities  IoT. In second place with 26% comes Industrial IoT.</span>
                </div>    
            </div>
        </div>
        <a>https://safeatlast.co/blog/iot-statistics/</a>
    </div>
  );
}

export default BannerFour;
