import React, {Component} from 'react';
import './Mona.css';
// import { Link, BrowserRouter as Router, Route } from "react-router-dom";

class Mona extends Component {
  render() {
    return (<div className="Mona">
      <header className="Mona-header">
        <br></br>
        <br></br>
        <br></br>
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
              <h5>Fabia's Fabulous Fairytales</h5>
              <br></br>
              <h6>Front end technologies:</h6>
              <p className="Tech">React, React Router, Javascript (JSX), Mobile Responsiveness, Voice, Ajax, Bootstrap-4, Node, Yarn, Heroku, .circleci, CSS, HTML, Git, Github, Mac CLI</p>
              <h6>Back end tech:</h6>
              <p className="Tech">Postgres, SQL, CORS, Express, Knex, Node, Heroku, .circleci, Git, Github, Mac CLI</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <a href="https://still-ravine-87799.herokuapp.com/"><img src="/yinyang.png" height="150" width="150" className="Fabia-pic" alt="Fabia"/></a>
              <br></br>
              <h5>Chinese Herbal Formulas</h5>
              <br></br>
              <h6>Technologies:</h6>
              <p className="Tech">Javascript, Postgres, Restful Web Services and Routes, CRUD, JSON, Mobile Responsiveness, Knex, Express, EJS, Morgan, JS Promises and Function Chaining, Bootstrap-4, Node, Yarn, Heroku, .circleci, CSS, HTML</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <a href="https://monatem.github.io/q1-project-mvp/"><img src="/Chimera.jpg" height="150" width="150" className="Fabia-pic" alt="Fabia"/></a>
              <br></br>
              <h5>Monsters from Mythology and Folklore</h5>
              <h6>Technologies:</h6>
              <p className="Tech">Javascript, Materialize CSS, Mobile Responsiveness, DOM manipulation, CSS, HTML, Git, Github, Mac CLI, node</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 offset-7">
              <div className="card">
                <a href="https://anthology-storytelling.herokuapp.com/"><img src="/Book of Dreams.jpg" height="150" width="150" className="Book-pic" alt="Book of Dreams"/></a>
                <br></br>
                <h5>Storytelling Anthology</h5>
                <br></br>
                <h6>Technologies:</h6>
                <p className="Tech">React, React Router, React Redux, Javascript (JSX), Mobile Responsiveness, Bootstrap-4, Node, Heroku, .circleci, CSS, HTML, Git, Github, Mac CLI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default Mona;
