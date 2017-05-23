import React from 'react';

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
