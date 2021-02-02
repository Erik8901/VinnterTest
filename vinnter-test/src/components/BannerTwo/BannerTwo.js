import React from 'react'

//CSS
import './styles/stylesBannerTwo.css'

function BannerTwo () {
  return (
    <div className="BannerTwo-div">
        <div className="bannerTwo-text-div-one">
            <span className="banner-two-title">Our articles</span>
                <div className="articles-div">
                    <div className="article">
                        <img className="article-img" alt="img" src="https://vinnter.se/wp-content/uploads/2020/12/Servitisation-benefits-1200x600x150dpi-1024x512.jpg" />
                        <span className="article-title">Servitisation: Benefits And Best Practices</span>
                        <span className="article-date-time-comments">2021-01-12  No Comments</span>
                        <span className="article-text">Servitisation is a complex-sounding word that encapsulates a simple idea: shifting from a reliance on products as a driver for economic growth, to an emphasis</span>
                        <a className="article-link" href="https://vinnter.se/servitisation-benefits-and-best-practices/">Read More...</a>
                    </div>
                    <div className="article">
                        <img className="article-img" alt="img" src="https://vinnter.se/wp-content/uploads/2020/12/Connected-City-2400x600x150dpi.jpg" />
                        <span className="article-title">Why The Future Of Smart Connected Things Is Tiny Machine Learning</span>
                        <span className="article-date-time-comments">2021-01-12  No Comments</span>
                        <span className="article-text">by Gustav Evertsson, Vinnter AB Tiny machine learning or TinyML is altering the shape and nature of the machine learning landscape. During the last</span>
                        <a className="article-link" href="https://vinnter.se/servitisation-benefits-and-best-practices/">Read More...</a>
                    </div>
                    <div className="article">
                        <img className="article-img" alt="img" src="https://vinnter.se/wp-content/uploads/2020/07/tablet-connected-world-w2400x600x150dpi-1568x392.jpg" />
                        <span className="article-title">Justifying connected things –  Business models</span>
                        <span className="article-date-time-comments">2021-01-12  No Comments</span>
                        <span className="article-text">According to data from McKinsey, about 75% of IoT-based businesses don’t make it off the ground. That’s very significant indeed, especially considering all the hype that the technology has received over the past decade.</span>
                        <a className="article-link" href="https://vinnter.se/servitisation-benefits-and-best-practices/">Read More...</a>
                    </div>
                </div>
          </div>
        
        <div className="bannerTwo-text-div-two">
            <span className="banner-two-title">The connected challenge</span> 
            <div className="article-text-two">
                <div>Today we expect everything to be connected. To make this happen many companies need external competence and experience that span multiple disciplines. Our knowledge stretch from low-level hardware design, radio technologies, embedded software development, databases, cloud technologies, backend development and mobile app development. To understand the user need, we also have people onboard, that know how to challenge the customer to do the right thing for the end-user.
                </div>                         
                <div className="line-break">Allow us to guide you through this, and help you utilize the right method for your product and target market.
                </div>
                <div className="line-break">Vinnter serves as an enabler for developing new business and service strategies to traditional industries, as well as fresh start-ups. We help companies stay competitive through sound business advice and highly skilled and experienced developers. No matter what problem.
                </div>                             
                <div className="line-break">If you want to read more on what we know, see one of our articles to the left, or
                </div> 
            </div>
        </div>
    </div>
  );
}

export default BannerTwo ;