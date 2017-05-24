import React from 'react';
import PropTypes from 'prop-types'; // ES6

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  init() {

    const rows = [];
    const cols = [];

    var i = 0;
    for (; i < 8; ++i) {
      rows[i] = [X];
      cols[i] = [X];
    }
  }

  render() {
    console.log('rendering board...');

      return (
        <div className="wrapper">
          <h3> Just testing.. Let the chess board be here... soon ;)
            Everything works fine from React. Just need to port the logic... 
          </h3>
        </div>
      );
  }
}

export default Board;
