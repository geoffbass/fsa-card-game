import React, { Component } from 'react';
import logo from './logo.svg';
import './Card.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="card">
          <div className="header inverted-box">
            <h4>Capstone</h4>
            <h5 className="cost">5</h5>
          </div>
          <img src="https://tpkbrenner.files.wordpress.com/2013/09/logo_capstone.jpg" />
          <div className="inverted-box">
            <p>Project</p>
          </div>
          <div className="card-text">
            <div className="card-attributes">
              <p>Students gain double XP</p>
            </div>
          </div>
          <div className="footer">
            <p>FSA Card Game</p>
          </div>
        </div>

        <div className="card">
          <div className="header inverted-box">
            <h4>Student</h4>
            <h5 className="cost">2</h5>
          </div>
          <img src="http://www.poultrysoftware.co.za/wp-content/uploads/2015/11/Lady-programming-4a.jpg" />
          <div className="inverted-box">
            <p>Person</p>
          </div>
          <div className="card-text">
            <div className="card-attributes">
              <p>Submit PR: gain 10 XP</p>
              <p>Submit Help Ticket: gain 5 XP, next PR XP doubled</p>
            </div>
          </div>
          <div className="footer">
            <p>FSA Card Game</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
