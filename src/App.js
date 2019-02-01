import React, { Component } from 'react';
import Chessboard from 'chessboardjsx';
import Home from './Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Home>
        {({ fen, onDrop, undo }) =>
          <Chessboard
            calcWidth={({ screenWidth }) => (screenWidth < 500 ? 320 : 480)}
            position={fen}
            transitionDuration={100}
            onDrop={onDrop}
            undo={undo}
            boardStyle={{
              borderRadius: '5px',
              boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`
            }}
          />
        }
      </Home>
    );
  }
}

export default App;
