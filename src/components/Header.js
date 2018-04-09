import React from 'react';
import Navbar from './Navbar'
import './Header.css';

export default function Header(){
  return (
    <header>
          <Navbar />
          <div className="overlay" id="modal">
            <div className="content">
              <h3>What do I do??</h3>
              <div>
                <p>So, Are you ready?</p>
                <ul>
                  <li>
                  "1. I pick a random secret number between 1 to 100 and keep it hidden."
                  </li>
                  <li>
                    "2. You need to guess until you can find the hidden secret number."
                  </li>
                  <li>
                    "3. You will get feedback on how close ("hot") or far ("cold") your guess is."
                  </li>
                </ul>
                <p>So, Are you ready to go?</p>
                <a className="close" href="#">Got it!</a>
              </div>
            </div>
          </div>
          <h1>HOT or COLD</h1>
        </header>
  );
}
