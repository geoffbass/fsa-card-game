import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ children, cost, imageURL, title, type }) => (
  <div className="card">
    <div className="header inverted-box">
      <h4>{title}</h4>
      <h5 className="cost">{cost}</h5>
    </div>
    <img
      src={
        imageURL ||
        'https://pbs.twimg.com/profile_images/694191024416112642/VtJUhbKk_400x400.png'
      }
    />
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

Card.propTypes = {
  cost: PropTypes.number.isRequired,
  imageURL: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

const Effect = ({ text }) => (
  <div className="attribute">
    <p>{text}</p>
  </div>
);

const Ability = ({ name, outcome }) => (
  <div className="attribute">
    <button className="inverted-box">{name}</button>
    <p>{outcome}</p>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="card-list">
        <Card
          cost={3}
          imageURL="https://cdn-images-1.medium.com/max/1600/1*dE4F_nf8P60V2baaaOxgLQ.jpeg"
          title="Stackathon"
          type="Project"
        />

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
          <Ability name="Submit PR" outcome="gain 10 XP" />
          <Ability
            name="Submit Help Ticket"
            outcome="gain 5 XP, next PR XP doubled"
          />
        </Card>

        <Card
          cost={3}
          imageURL="https://static1.squarespace.com/static/53b7d42de4b04cfc3188c6eb/t/5a16cd1a4192021369940b18/1511443762277/classroom-1297775_640.png"
          title="Fellow"
          type="Person"
        >
          <Effect text="Students earn 20% more XP for each action" />
          <Ability
            name="Lead Standup"
            outcome="gain 2 XP, students can submit 2 PRs this turn"
          />
          <Ability
            name="Answer Help Ticket"
            outcome="gain 10 XP, curry 5 favor"
          />
        </Card>

        <Card
          cost={4}
          imageURL="https://images.vexels.com/media/users/3/144141/isolated/lists/ab09675d1ea143dc9b03d244a3d7487a-shopping-kart.png"
          title="Grace Shopper"
          type="Person"
        >
          <Effect text="Win the game by submitting 15 PRs" />
          <Effect text="Lose the game by suffering a major security breach" />
        </Card>
      </div>
    );
  }
}

export default App;
