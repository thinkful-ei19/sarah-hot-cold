import React from 'react';
import Header from './components/Header'
import Game from './components/Game'
import './App.css';

export default class App extends React.Component {
  render(){
    return (
    <main>
      <Header />
      <Game />
    </main>
    )
  }

}
