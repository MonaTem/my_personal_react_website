import React, { Component } from 'react';
import './App.css';
import Mona from './Mona.js';
import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {


  render() {
    return (
      <div className="App">
      <br/>
      <br/>
        <Router>
          <div>
            <Route exact path="/" component={Mona}></Route>
           </div>
        </Router>
      </div>
    );
  }
}

export default App;
