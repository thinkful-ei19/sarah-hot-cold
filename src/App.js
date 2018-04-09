import React from 'react';
import Header from './components/header'
import Game from './components/game'
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
