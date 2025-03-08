import React, { Component } from 'react';


class CounterTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      timerRunning: false,
      intervalId: null,
    };
  }

  startTimer() {
    if (!this.state.timerRunning) {
      const intervalId = setInterval(() => {
        this.setState({ count: this.state.count + 1 });
      }, 1000);
      this.setState({ timerRunning: true, intervalId: intervalId });
    }
  }

  stopTimer() {
    clearInterval(this.state.intervalId);
    this.setState({ timerRunning: false, count: 0, intervalId: null });
  }

  pauseTimer() {
    clearInterval(this.state.intervalId);
    this.setState({ timerRunning: false, intervalId: null });
  }

  render() {
    return (
      <div className="container">
        <div className="counter-container">
        <h1 className="heading">Counter</h1>
          <h1 className="counter">{this.state.count}s</h1>
          <button onClick={this.startTimer.bind(this)} className="button start">Start</button>
          <button onClick={this.stopTimer.bind(this)} className="button stop">Stop</button>
          <button onClick={this.pauseTimer.bind(this)} className="button pause">Pause</button>
        </div>
      </div>
    );
  }
}

export default CounterTimer;