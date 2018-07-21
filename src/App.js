import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentence: "Hello, my name is Gabriel!",
      counter: 0,
      split: [],
      input: "",
      win: false,
      wpm: 0,
      start: 0
    };
  }

  componentDidMount() {
    const split = this.state.sentence.split(" ");

    this.setState({ split: split, start: Date.now() });
  }

  renderGame = () => {
    if (this.state.win) {
      return (
        <div>
          <p>You won!</p>
          <p>{this.state.wpm} wpm</p>
        </div>
      );
    }
    return (
      <div>
        <p>{this.getString()}</p>
        <input
          type="text"
          name="wordInput"
          id="input"
          value={this.state.input}
          onChange={this.onChange}
        />
      </div>
    );
  };

  calculateWPM = () => {
    const timeInMilliSeconds = Date.now() - this.state.start;
    let timeInMinutes = timeInMilliSeconds / 1000 / 60;
    timeInMinutes = Math.round(timeInMinutes * 1000) / 1000;

    const wpm = Math.round(this.state.split.length / timeInMinutes);

    this.setState({ wpm: wpm });
  };

  getString = () => {
    let paragraph = [];
    this.state.split.forEach((word, index) => {
      paragraph.push(
        index === this.state.counter ? (
          <span key={word} className="green">
            {word}
          </span>
        ) : (
          <span key={word}>{word}</span>
        )
      );
      paragraph.push(<span key={index}> </span>);
    });
    return paragraph;
  };

  onChange = e => {
    this.setState({ input: e.target.value });

    const input = this.state.input;
    let counter = this.state.counter;
    const split = this.state.split;

    if (input === split[counter]) {
      this.setState({
        counter: ++counter,
        input: "",
        win: counter === split.length ? true : false
      });
      if (counter === split.length) {
        this.calculateWPM();
      }
    }
  };

  render() {
    return <div className="App">{this.renderGame()}</div>;
  }
}



export default App;
