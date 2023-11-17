import React, { Component } from "react";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      clicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({clicked: !this.clicked});
  }

  render() {
    return (
      <div>
        <h1>{this.state.clicked ? "Clicked" : "Not Clicked"}</h1>
        <button onClick={this.handleClick}>Touch Me</button>
      </div>
    );
  }
}

export default Game;
