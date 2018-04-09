import React from 'react';
import Gameform from './game-form.js';
import Guesscounter from './guess-counter.js';
import Guesslist from './guess-list.js'
import './Game.css';

export default function Game() {
return (
  <section className="game">
    <h2 id="feedback">Make Your Guess!!</h2>
      <Gameform />
      <Guesscounter />
      <Guesslist />
  </section>
)
}