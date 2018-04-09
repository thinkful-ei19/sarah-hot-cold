import React from 'react';
import Navbar from './navbar';
import Overlay from './overlay'
import './header.css';

export default function Header(){
  return (
    <header>
          <Navbar />
          <Overlay />
          <h1>HOT or COLD</h1>
        </header>
  );
}
