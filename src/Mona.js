import React, {Component} from 'react';
import './Mona.css';
// import { Link, BrowserRouter as Router, Route } from "react-router-dom";

class Mona extends Component {
  render() {
    return (<div className="Mona">
      <header className="Mona-header">
        <h1 className="Mona-title">Mona Temchin, Fullstack Developer, React JS, SQL, etc.</h1>
        <br></br>
        <img src="/Mona.jpg" className="Mona-pic" alt="Mona"/>
      </header>
      <br></br>
      <h3 className="Resume">
        <a href="https://resume.creddle.io/resume/djvfcfevvdt">Resume</a>
      </h3>

      <br></br>
      <div>
        <h3 className="Projects">Projects</h3>
        <br></br>
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <a href="https://fabias-fabulous-fairytales.herokuapp.com/"><img src="/Fabia.jpeg" height="150" width="150" className="Fabia-pic" alt="Fabia"/></a>
              <br></br>
              <p>Fabia's Fabulous Fairytales</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <a href="https://still-ravine-87799.herokuapp.com/"><img src="/yinyang.png" height="150" width="150" className="Fabia-pic" alt="Fabia"/></a>
              <br></br>
              <p>Chinese Herbal Formulas</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <a href="https://monatem.github.io/q1-project-mvp/"><img src="/Chimera.jpg" height="150" width="150" className="Fabia-pic" alt="Fabia"/></a>
              <br></br>
              <p>Monsters from Mythology and Folklore</p>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default Mona;
