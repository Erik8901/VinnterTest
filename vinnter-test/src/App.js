import React from 'react'

//Components
import Header from './components/Header/Header'
import BannerOne from './components/BannerOne/BannerOne'
import BannerTwo from './components/BannerTwo/BannerTwo'
import BannerThree from './components/BannerThree/BannerThree'
import BannerFour from './components/BannerFour/BannerFour'
import BannerFive from './components/BannerFive/BannerFive'
import Footer from './components/Footer/Footer'

//CSS
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <BannerOne />
        <BannerTwo />
        <BannerThree />
        <BannerFour />
        <BannerFive />
        <Footer />
    </div>
  );
}

export default App;
