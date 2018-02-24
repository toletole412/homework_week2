import React, { PureComponent } from 'react'
import Title from '../components/Title'
import './Board.css'
import ShowGuess from './Show_guess'

class Board extends PureComponent {
  render() {
    return (
      <div>
        <Title content="Ginger hangman" />
        <ShowGuess />

        <ul class="left" id="head">
          <img src="https://imageshack.com/a/img924/43/v3X4aD.gif" />
        </ul>
        <ul class="left" id="arms">
          <img src="https://imageshack.com/a/img922/1454/UvzGnf.gif" />
          <img src="https://imageshack.com/a/img924/2823/KxbKw7.gif" />
        </ul>
        <ul class="left" id="foots">
          <img src="https://imageshack.com/a/img924/3186/qlYVlo.gif" />
          <img src="https://imageshack.com/a/img923/8052/A8U1Ew.gif" />
        </ul>
      </div>
    )
  }
}

export default Board
