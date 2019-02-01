import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import Chess from 'chess.js';
import Grid from '@material-ui/core/Grid';
import SelectOpening from './SelectOpening';

export default class Home extends Component {
  static propTypes = { children: PropTypes.func };

  state = { fen: 'start' };

  componentDidMount() {
    this.game = new Chess();
  }

  componentDidUpdate() {
    if (this.game.in_checkmate()) {
      this.game.turn() === 'b'
        ? console.log('Black has been checkmated')
        : console.log('White has been checkmated');
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  openingSequence = (opening) => {
    this.reset();
    opening.forEach((move, index) => {
      this.timeout = setTimeout(() => this.nextMove(move), index * 500);
    });
  }

  makeMove = (from, to) => {
    const move = this.game.move({ from, to });

    if (move === null) return;
    this.setState({ fen: this.game.fen() });
  }

  onDrop = ({ sourceSquare, targetSquare }) => (
    this.makeMove(sourceSquare, targetSquare)
  )

  nextMove = (move) => (
    this.setState({ fen: this.game.fen() })
  )

  reset = () => {
    this.game.reset();
    this.setState({ fen: 'start' });
  }

  render() {
    const { fen, undo } = this.state;
    return (
      <div style={{ paddingTop: 20 }}>
        <Grid container justify='center' style={{ marginBottom: 40 }}>
          <Grid item>
            <SelectOpening onSelect={this.openingSequence} />
          </Grid>
        </Grid>
        <Grid container justify='center' alignItems='center'>
          <Grid item>
            {this.props.children({ fen, onDrop: this.onDrop, undo })}
          </Grid>
        </Grid>
      </div>
    );
  }
}
