import React from 'react';
//const React = required('react')
import Header from './components/Header'
import Player from './components/Player'
import Board from './components/Board'
import Square from './components/Square'

class App extends React.Component {
  render () {
    return  (
      <div>
    <Header />
    <Player whichPlayer="X"/>
    <Player whichPlayer="O"/>
    <Board />

    </div>
  )
  }
}

//module.exports = App
export default App;
