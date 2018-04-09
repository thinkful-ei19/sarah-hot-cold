import React from 'react';
import './Game.css';

export default function Game() {
return (
  <section className="game">
    <h2 id="feedback">Make Your Guess!!</h2>
      <form>
        <input type="text" name="userGuess" id="userGuess" className="text" maxlength="3" autocomplete="off" placeholder="Enter your Guess" required=""/>
        <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
      </form>
      <p>
          Guess # 
          <span id="count">0</span>
          !!
      </p>
      <ul id="guessList" className="guessBox clearfix">
            {/* ::before
            ::after */}
      </ul>
  </section>
)
}