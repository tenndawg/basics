import React, { Component } from 'react';
import './timer.css';

class Timer extends Component {
    
  constructor(props) {
    super(props);
    
    this.state = {
      buttonText: "Start",
      time: this.props.time,
      interval: null
    };
    this.clickMe = this.clickMe.bind(this);
    this.reset = this.reset.bind(this);
  }

  countDown() {
  const interval = setInterval(()=>{
    if (this.state.time <= 0) {
      this.setState({
        time: 0
      });
      this.stopCountDown();
    } else {
    this.setState({
        time: this.state.time - 1
      });
    }
    }, 1000);
    this.setState({
      interval: interval,
      buttonText: "Stop"
    });
  }

  reset() {
    this.setState({
      time: this.props.time,
      buttonText: "Start"
    });
    this.stopCountDown();
  }

  stopCountDown() {
    clearInterval(this.state.interval);
    this.setState({
      buttonText: "Start",
      interval: null
    })
  }

  clickMe() {
      if (this.state.buttonText === "Start") {
        this.countDown();
      } else {
        this.stopCountDown();
      }
  }
   
  render() {
    return (
      <div className="format">
        <h1>{this.state.time}</h1>
        <button id="start" onClick={this.clickMe}>{this.state.buttonText}</button>
        <button id="reset" onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Timer;