import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Character} from './characterClass';

let selectedCharacter = new Character("!", "Exclamation Mark", "Huutomerkki");

const InfoBox = () => {
  return(
    <div className="InfoBox">
      <h3>Merkin tiedot</h3>
      <span className="character">{selectedCharacter.char}</span>
      <div id="dataContainer">
        {/* TO DO:      turn into table 
            CHECK OUT:  flex-box, grid*/}
        <div id="leftData">
          <ul>
            <li>Suomeksi</li>
            <li>Englanniksi</li>
            <li>Unicode</li>
          </ul>
        </div>
        <div id="rightData">
          <ul>
            <li className="charData">{selectedCharacter.nameFin}</li>
            <li className="charData">{selectedCharacter.nameEng}</li>
            <li className="charData">{selectedCharacter.unicode}</li>
          </ul>
        </div>
      </div>
    </div>
  )
};

const CharacterInfo = () => {
  return (
    <div>
      <InfoBox />
    </div>
  )
};

const UserInput = () => {
  return(
    <div className="userInputForm">
      <p>Anna merkki, jonka nimen haluat tietää:</p>
      <input type="search" placeholder="Merkki"></input>
      <button type="button" onClick="">Etsi</button>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="derp">
            <h1>Merkistökone</h1>
            <UserInput />
            <CharacterInfo />
        </div>
      </div>
    );
  }
}

export default App;
