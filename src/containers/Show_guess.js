import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { startGuess } from '../actions/game'
import './Show_guess.css'

class ShowGuess extends PureComponent {
  static propTypes = {
    startGuess: PropTypes.arrayOf(PropTypes.string),
    word: PropTypes.arrayOf(PropTypes.string)
  }

  renderShowGuess = (word, guess) => {
    return (
      <div className="guess">
        {this.renderGuess(guess)}
      </div>
    )
  }

  renderGuess = (word, guess) => {
    const show_array = word.map( char => guess.includes(char)? char : '_' )
    return show_array.join(' ')
  }

  render() {
    return (
      <div>
        <ul className="ShowGuess">
          sjhs
         {this.props.word.map(this.renderShowGuess)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ startGuess }) => ({ startGuess })

export default connect(mapStateToProps)(ShowGuess)
