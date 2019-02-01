import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import openingMoves from './openingMoves';

export default class SelectOpening extends Component {
  state = { opening: '' }

  handleChange = event => {
    const { target: { name, value } } = event;
    this.setState({ [name]: value });
    this.props.onSelect(openingMoves[value]);
  }

  render() {
    return (
      <form>
        <FormControl style={{ width: 180 }}>
          <InputLabel htmlFor="opening">Selet an Opening</InputLabel>
          <Select
            value={this.state.opening}
            onChange={this.handleChange}
            name="opening"
            inputProps={{
              id: 'opening',
            }}
          >
            <MenuItem value='elephantGambit'>Elephant Gambit</MenuItem>
            <MenuItem value='evansGambit'>Evan's Gambit</MenuItem>
            <MenuItem value='kingsGambit'>King's Gambit</MenuItem>
            <MenuItem value='queensGambit'>Queen's Gambit</MenuItem>
            <MenuItem value='retiOpening'>Reti Opening</MenuItem>
            <MenuItem value='ruyLopez'>Ruy Lopez</MenuItem>
            <MenuItem value='scandinavianGambit'>Scandinavian Gambit</MenuItem>
            <MenuItem value='caroKannDefense'>Caro-Kann Defense</MenuItem>
            <MenuItem value='dutchDefense'>Dutch Defense</MenuItem>
            <MenuItem value='englishOpening'>English Opening</MenuItem>
            <MenuItem value='frenchDefense'>French Defense</MenuItem>
            <MenuItem value='kingsIndianDefense'>King's Indian Defense</MenuItem>
            <MenuItem value='modernDefense'>Pirc/Modern Defense</MenuItem>
            <MenuItem value='sicilianDefense'>Sicilian Defense</MenuItem>
          </Select>
        </FormControl>
      </form>
    )
  }
}
