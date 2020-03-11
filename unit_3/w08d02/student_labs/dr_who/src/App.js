import React from 'react';
import tardis from './data.js';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tardis: tardis,
      name: 'Time and Relative Dimension in Space',
      caps: false,
    }
    }
    changeIt (text) {
  if (this.state.tardis.caps) {
    this.setState({
      tardis: {
        name: text.toLowerCase(),
        caps: false
      }
    })
  } else {
    this.setState({
      tardis: {
        name: text.toUpperCase(),
        caps: true
      }
    })
  }
}

  render () {
    return (
      <div>
        {

          <h3>{this.state.name}</h3>

        }
      </div>
    )
  }
}
export default App;
