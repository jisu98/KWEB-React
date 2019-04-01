import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0, 
    foo: {
        bar: 0, 
        foobar: 1
    }
  }

  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  handleDecrease = () => {
    /*
    this.setState({
      number: this.state.number - 1
    });
    */
   const { number } = this.state;
   this.setState({
       number: number - 1
   });
  }

  handleChangeFoobar = () => {
      this.setState({
          number: 0, 
          foo: {
              ...this.state.foo, 
              foobar: 2
          }
      })
  }

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
        <div>foobar: {this.state.foo.foobar}</div>
        <button onClick={this.handleChangeFoobar}>change</button>
      </div>
    );
  }
}

export default Counter;