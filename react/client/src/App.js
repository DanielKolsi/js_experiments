import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Square as too} from "./Square";

class Square extends React.Component {
  constructor() {
    super();
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => this.setState({value: 'o'})}>
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {

  renderSquare(i) {

    return <Square />;
  }

  render() {
    const status = 'White:';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(0)}
          {this.renderSquare(1)}
        </div>
        <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        </div>
        <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        </div>
        <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        </div>
        <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        </div>
        <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        </div>
        <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        </div>
        <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
      super();
      this.state = {
        value: null,
      };
    }

  render() {
    return (
      <div className="Chess">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Porting Java chess engine to React...takes some time</h2>

        </div>
        <div className="list">

            <ul>
              <li>This</li>
              <li>is</li>
              <li>list</li>
            </ul>
            <div className="game">
                <div className="game-board">
              <Board />
              </div>
              <div className="game-info">
              <div>{/* status */}</div>
              <ol>{/* TODO */}</ol>
              </div>
            </div>
            <button className="square" onClick={() => this.setState({value: 'Q'})}>
              {this.state.value}
            </button>
        </div>
        <p className="App-intro">
          abc-To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


export default App;
