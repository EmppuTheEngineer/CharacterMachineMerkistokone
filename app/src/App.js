import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const CharacterInfo = () => {
  let selectedCharacter = "!";
  let sCinUnicode = selectedCharacter.codePointAt();
  return (
    <div>
      <h1>Unicode of {selectedCharacter} is {sCinUnicode}</h1>
    </div>
  )
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="der">
            <h1>Merkistökone</h1>
            <p>Anna merkki, jonka nimen haluat tietää:</p>
            <input type="search" placeholder="Merkki"></input>
            <CharacterInfo />
        </div>
      </div>
    );
  }
}

export default App;
