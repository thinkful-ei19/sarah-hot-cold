import React from 'react';
import './nav-bar.css';

export default function Navbar(){
  return (

<nav> 
            <ul>
              <li>
                <a className="what" href="#">What?</a>
              </li>
              <li>
                <a className="new" href="#">New game</a>
              </li>
            </ul>
          </nav>
  )
}

