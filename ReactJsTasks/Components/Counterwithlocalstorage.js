import React, { Component } from 'react';

class CounterWithLocalStorage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: Number(localStorage.getItem('counter')) || 0,
      isRunning: false,
    };
    this.intervalId = null;
  }

  componentDidUpdate() {
    localStorage.setItem('counter', this.state.counter);
  }

  startCounter = () => {
    if (!this.state.isRunning) {
      this.setState({ isRunning: true });
      this.intervalId = setInterval(() => {
        this.setState(prevState => ({ counter: prevState.counter + 1 }));
      }, 1000);
    }
  };

  stopCounter = () => {
    this.setState({ isRunning: false });
    clearInterval(this.intervalId);
  };

  resetCounter = () => {
    this.stopCounter();
    this.setState({ counter: 0 });
    localStorage.setItem('counter', 0);
  };

  render() {
    return (
        <div className="container">
      <div className="counter-container">
      <h1 className="heading">Counter With Local Storage</h1>
        <h1 className="counter">{this.state.counter}</h1>
        <button className="button start" onClick={this.startCounter}>Start</button>
        <button className="button stop" onClick={this.stopCounter}>Stop</button>
        <button className="button pause" onClick={this.resetCounter}>Reset</button>
      </div>
      </div>
    );
  }
}

export default CounterWithLocalStorage;


