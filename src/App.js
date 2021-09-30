import React from 'react'

// import axios from 'axios'

import ScrollUpButton from 'react-scroll-up-button'

import Nav from './components/Nav'
import About from './components/About'
import Announcements from './components/Announcements'
import Events from './components/Events'
import Staff from './components/Staff'
import Footer from './components/Footer'

class App extends React.Component {
    render() {
      return (
        <div>
          <Nav/>
          <ScrollUpButton/>
           <About/>
          <Announcements/>
          {/* <Events/> */}
          {/* <Staff/> */}
          <Footer/>
        </div>
    );
  }
}

export default App;
