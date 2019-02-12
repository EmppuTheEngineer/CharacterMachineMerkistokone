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
      <div id="datawrapper">
        {/* TO DO:      turn into table 
            CHECK OUT:  flex-box, grid*/}
        <div className="charInfoLabel">Suomeksi</div>
        <div className="charInfoData">{selectedCharacter.nameFin}</div>
        <div className="charInfoLabel">Englanniksi</div>
        <div className="charInfoData">{selectedCharacter.nameEng}</div>
        <div className="charInfoLabel">Unicode</div>
        <div className="charInfoData">{selectedCharacter.unicode}</div>
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
      <button type="button" onClick="" id="findButton">Etsi</button>
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
