import React, {Component} from 'react';
import birds from './data.js'
import './App.css'


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      birds: birds,
      birdName: '',
      image: '',
      user: '',
      approved: false,
    }
  }
  render () {
    return (
      <div>
        <form>
          <label htmlFor="birdName">
            <input type="text"
                    id="birdName"
                    value={this.state.birdName}

                    />
          </label>
          <label htmlFor="image">
            <input type="text"
                    id="image"
                    value={this.state.image}

                    />
          </label>
          <label htmlFor="user">
            <input type="text"
                    id="user"
                    value={this.state.user}

                    />
          </label>
          <label htmlFor="approved">
            <input type="boolean"
                    id="approved"
                    value={this.state.approved}
                    onChange={this.handleChange}
                    />
          </label>
        </form>


          {this.state.birds.map(bird => (
          <li>
              <img src={bird.image} />
              <br />
             <p>{bird.birdName}</p>
            </li>

          ))}




      </div>
    )
  }
}

export default App;
