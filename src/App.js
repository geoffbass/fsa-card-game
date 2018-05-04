import React, { Component } from 'react';
import logo from './logo.svg';
import './Card.css';

const Card = ({ cost, imageURL, title, type }) => (
  <div className="card">
    <div className="header inverted-box">
      <h4>{title}</h4>
      <h5 className="cost">{cost}</h5>
    </div>
    <img src={imageURL} />
    <div className="inverted-box">
      <p>{type}</p>
    </div>
    <div className="card-text">
      <div className="card-attributes">attributes go here</div>
    </div>
    <div className="footer">
      <p>FSA Card Game</p>
    </div>
  </div>
);

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Card
          cost={3}
          imageURL="https://cdn-images-1.medium.com/max/1600/1*dE4F_nf8P60V2baaaOxgLQ.jpeg"
          title="Stackathon"
          type="Project"
        />

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
              <div className="attribute">
                <p>
                  When this card is played, remove any other Project cards from
                  play
                </p>
              </div>
              <div className="attribute">
                <p>Students gain double XP</p>
              </div>
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
              <div className="attribute">
                <button className="inverted-box">Submit PR</button>
                <p>gain 10 XP</p>
              </div>
              <div className="attribute">
                <button className="inverted-box">Submit Help Ticket</button>
                <p>gain 5 XP, next PR XP doubled</p>
              </div>
            </div>
          </div>
          <div className="footer">
            <p>FSA Card Game</p>
          </div>
        </div>

        <div className="card">
          <div className="header inverted-box">
            <h4>Fellow</h4>
            <h5 className="cost">3</h5>
          </div>
          <img src="https://static1.squarespace.com/static/53b7d42de4b04cfc3188c6eb/t/5a16cd1a4192021369940b18/1511443762277/classroom-1297775_640.png" />
          <div className="inverted-box">
            <p>Person</p>
          </div>
          <div className="card-text">
            <div className="card-attributes">
              <div className="attribute">
                <p>Students earn 20% more XP for each action</p>
              </div>
              <div className="attribute">
                <button className="inverted-box">Lead Standup</button>
                <p>gain 2 XP, students can submit 2 PRs this turn</p>
              </div>
              <div className="attribute">
                <button className="inverted-box">Answer Help Ticket</button>
                <p>gain 10 XP, curry 5 favor</p>
              </div>
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
