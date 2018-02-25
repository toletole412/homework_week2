import { START_GUESS } from '../actions/types'

const initialState = []

export default (state = initialState, { type, payload } = {}) => {
    switch (type) {
      case START_GUESS:
        return state.concat()
      default:
        return state
    }
  }


  /*
  function showGuess(word, guesses) {
    var show_array = word.split('').map( char => guesses.includes(char)? char : '_' )
    return show_array.join(' ')
  }
  */
