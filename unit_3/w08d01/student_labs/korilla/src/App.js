import React, { Component } from 'react';
import receipts from './receipts'


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      receipts: receipts,
    }
  }
  render () {
    console.log(receipts);
    return (
    <div>
        <p>
          Rendering App
        </p>
      </div>
  )
}
}

export default App;
