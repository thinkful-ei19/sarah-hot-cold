import React from 'react';
import Navbar from './Navbar';
import Overlay from './overlay'
import './Header.css';

export default function Header(){
  return (
    <header>
          <Navbar />
          <Overlay />
          <h1>HOT or COLD</h1>
        </header>
  );
}
