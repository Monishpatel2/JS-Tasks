import React, { Component } from 'react';


class MiniCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      result: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  calculate = (operation) => {
    const { num1, num2 } = this.state;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      this.setState({ result: 'Please enter valid numbers' });
      return;
    }

    let result;
    switch (operation) {
      case 'add':
        result = n1 + n2;
        break;
      case 'subtract':
        result = n1 - n2;
        break;
      case 'multiply':
        result = n1 * n2;
        break;
      case 'divide':
        result = n2 !== 0 ? n1 / n2 : 'Cannot divide by zero';
        break;
      default:
        result = 'Invalid Operation';
    }
    this.setState({ result });
  };

  render() {
    return (
      <div className="container">
        <div className="counter-container">
          <h1 className="heading">Mini Calculator</h1>
          <input
            type="number"
            name="num1"
            value={this.state.num1}
            onChange={this.handleInputChange}
            placeholder="Enter first number"
            className="input-field"
          />
          <br />
          <input
            type="number"
            name="num2"
            value={this.state.num2}
            onChange={this.handleInputChange}
            placeholder="Enter second number"
            className="input-field"
          />
          <br />
          <div>
            <button className="button start" onClick={() => this.calculate('add')}>Add</button>
            <button className="button stop" onClick={() => this.calculate('subtract')}>Subtract</button>
            <button className="button pause" onClick={() => this.calculate('multiply')}>Multiply</button>
            <button className="button delete" onClick={() => this.calculate('divide')}>Divide</button>
          </div>
          <h2 className="counter">Result: {this.state.result}</h2>
        </div>
      </div>
    );
  }
}

export default MiniCalculator;
