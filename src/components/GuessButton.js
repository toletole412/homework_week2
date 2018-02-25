import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { startGuess } from '../actions/game'
import './GuessButton.css'

export class GuessButton extends PureComponent {
  static propTypes = {
    startGuess: PropTypes.func.isRequired,
    label: PropTypes.string
  }

  handleClick(event) {
    this.props.startGuess(event)
  }

  handleChange = (e) => e.preventDefault()

  handleSubmit(event) {
    alert('A guess was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          guess:
          <input type="text" onChange={this.handleChange} />
        </label>
        <input type="submit" value="startGuess" onClick={this.handleClick}/>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return { startGuess: state.startGuess };
};

const Guess = connect(mapStateToProps)(GuessButton);
export default Guess
