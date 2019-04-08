import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

class App extends Component {
  state = {
    images: [
      "http://placekitten.com/g/600/400",
      "http://placekitten.com/600/400",
      "https://placebear.com/600/400",
      "https://placebear.com/g/600/400"
    ],
    currentIndex: 0,
    intervalId: null,

  }
  onForward = (e) => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      this.setState({ currentIndex: 0 })
    } else {
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    }

  }
  onBack = (e) => {
    if (this.state.currentIndex === 0) {
      this.setState({ currentIndex: this.state.images.length - 1 })
    } else {
      this.setState({ currentIndex: this.state.currentIndex - 1 });
    }
  }
  onForwardClick = (e) => {
   this.stopAutoPlay();
   this.onForward(e);
  }
  stopAutoPlay = (e) => {
    clearInterval(this.state.intervalId);
  }

  componentWillMount() {
    const intervalId = setInterval(this.onForward, 1000);
    this.setState({ intervalId: intervalId })
  }
  onBackClick = (e) => {
    this.stopAutoPlay();
    this.onBack(e);
  }
  render() {
    return (
      <div className="wrapper">
        <div></div>
        <div className="image-container`">
          <img src={this.state.images[this.state.currentIndex]} />
          <div className="controls">
            <Button text={"<"} onClick={this.onBackClick} />
            <Button text={">"} onClick={this.onForwardClick} />
          </div>
        </div>
      </div>
    );

  }
}

export default App;
