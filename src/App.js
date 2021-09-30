import React from 'react'

// import axios from 'axios'

import {TinyButton as ScrollUpButton} from 'react-scroll-up-button'

import Nav from './components/Nav'
// import HeroArea from './components/HeroArea'
// import DogProf from './components/DogProf'
// import Weather from './components/Weather'
// import Map from './components/Map'
import Footer from './components/Footer'

class App extends React.Component {
    render(){
      return (
      <div>
        <Nav/>
        <ScrollUpButton/>
        <Footer/>
      </div>
    );
  }
}

export default App;
