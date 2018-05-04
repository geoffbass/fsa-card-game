import React, { Component } from 'react';
import logo from './logo.svg';
import './Card.css';

const double = x => 2 * x;
// double3() // 6
double(3); // 6
double(5); // 10
double(3236894); // ???

const Card = ({ children, cost, imageURL, title, type }) => (
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
      <div className="card-attributes">{children}</div>
    </div>
    <div className="footer">
      <p>FSA Card Game</p>
    </div>
  </div>
);

const Ability = ({ name, effect }) => (
  <div className="attribute">
    <button className="inverted-box">{name}</button>
    <p>{effect}</p>
  </div>
);

const Effect = ({ text }) => (
  <div className="attribute">
    <p>{text}</p>
  </div>
);

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Card
          cost={4}
          imageURL="https://cdn.vectorstock.com/i/1000x1000/70/40/color-image-cartoon-shopping-cart-with-wheels-vector-14667040.jpg"
          title="Grace Shopper"
          type="Project"
        >
          <Effect text="You win the game if you submit 15 PRs" />
          <Effect text="You lose the game if you suffer a major data breach" />
        </Card>

        <Card
          cost={5}
          imageURL="https://tpkbrenner.files.wordpress.com/2013/09/logo_capstone.jpg"
          title="Capstone"
          type="Project"
        >
          <Effect text="When this card is played, remove any other Project cards from play" />
          <Effect text="Students gain double XP" />
        </Card>

        <Card
          cost={2}
          imageURL="http://www.poultrysoftware.co.za/wp-content/uploads/2015/11/Lady-programming-4a.jpg"
          title="Student"
          type="Person"
        >
          <Ability name="Submit PR" effect="gain 10 XP" />
          <Ability
            name="Submit Help Ticket"
            effect="gain 5 XP, next PR XP doubled"
          />
        </Card>

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
