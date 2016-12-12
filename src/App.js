import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      seconds: 0,
      paused: true
    }
    this.timerId = null
  }

  handleStart(e){
    if (!this.timerId) {
      this.timerId = setInterval( _ => this.updateTime(), 1000)
    }
  }

  handlePause(e){
    let paused = !this.state.paused
    if (paused) {
      this.resetInterval()
      this.setState({
        paused,
      })
    } else {
      this.handleStart()
    }
  }

  resetInterval(){
    clearInterval(this.timerId)
    this.timerId = null
  }

  handleReset(e){
    this.resetInterval()
    this.setState({
      seconds: 0,
      paused: true
    })
  }

  updateTime(){
    this.setState({
      seconds: this.state.seconds + 1,
      paused: false
    })
  }
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <div>
          <p className="stopwatch">
            {this.state.seconds}
          </p>
          <div className="controls">
            <button onClick={ e => this.handleStart(e)}>
              Start
            </button>
            <button onClick={ e => this.handlePause(e)}>
              Stop
            </button>
            <button onClick={ e => this.handleReset(e)}>
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
