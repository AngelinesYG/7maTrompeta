import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Route, Switch, Link} from 'react-router-dom';
import {Redirect} from 'react-router';
// import axios from 'axios'

import ScrollUpButton from 'react-scroll-up-button'

import Home from './components/Home'
import Nav from './components/Nav'
import Mission from './components/Mission'
import Announcements from './components/Announcements'
import Events from './components/Events'
import Staff from './components/Staff'
import Footer from './components/Footer'

class App extends React.Component {
    render() {
      return (
      <Router>
        <div>
          <Nav/>
          <ScrollUpButton/>
          <Switch>
            <Route path="/" exact component={Home}>
              <div id="home-container">
                <Home/>
              </div>
            </Route>
            <Route path="/Mission">
              <div id="mission-container"> 
                <Mission/>
              </div>
            </Route>
            <Route path="/Announcements">
              <div id="announcements-container"> 
                <Announcements/>
              </div>
            </Route>
            <Route path="/Events">
              <div id="events-container">
                <Events/>
              </div>
            </Route>
            <Route path="/Staff">
              <div id="staff-container">
                <Staff/>
              </div>
            </Route>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
