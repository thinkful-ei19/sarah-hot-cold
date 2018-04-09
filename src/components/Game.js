import React from 'react';
import Gameform from './game-form.js';
import './Game.css';

export default function Game() {
return (
  <section className="game">
    <h2 id="feedback">Make Your Guess!!</h2>
      <Gameform />
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