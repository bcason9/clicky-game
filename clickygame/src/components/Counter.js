import React from "react";

class Counter extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };


  render() {
    return (
      <div className="card text-center">
        <h1>
          Click Counter!
        </h1>
        <div>
          <h4>Click Count: {this.state.count}</h4>
          <button onClick={this.handleIncrement}>
            Increment
          </button>{" "}
          <button onClick={this.handleDecrement}>
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
