import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Home from './Home';
import Signup from './signup';
import Login from './Login';

import './App.css';

class App extends Component {
  render(){
    return (
      <Router>
          <div>
            <Route path="/" component={Home}/>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />

           
            </div>
        </Router>
    );
  }
}


export default App;
