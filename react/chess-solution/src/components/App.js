import React from 'react';
import Board from './Board';

import PropTypes from 'prop-types'; // ES6

const App = ({init}) => {
  return (
    <div>
      <Board />
    </div>

  );
}

App.propTypes = {

};

export default App;
