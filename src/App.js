import React, { Component } from 'react';
import './App.css';
import Timer from './components/Timer';

class App extends Component {
  
  render() {
    return (
      <div>
        <Timer time="10"/>
        <Timer time="20"/>
        <Timer time="30"/>
        <Timer time="40"/>
        <Timer time="50"/>
        <Timer time="60"/>
      </div>
    );
  }
}

export default App;
