import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }

  componentDidMount() {
    console.log("component rendered");
  }

  componentDidUpdate() {
    console.log("I just upated");
  }

  componentWillUnmount() {
    console.log("Goodbye, cruel world");
  }

  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({
      // current에 현재 state가 넘어온다.
      count: current.count + 1 // 그 state의 count에 1을 더한다.
    }));
  };

  minus = () => {
    this.setState(current => ({
      count: current.count - 1
    }));
  };

  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>This number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
