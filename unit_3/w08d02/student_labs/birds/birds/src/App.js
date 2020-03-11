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
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    const newItem = {
      birdName: this.state.birdName,
      image: this.state.image,
      user: this.state.user

    }
    this.setState({
      birds: [newItem, ...this.state.birds],
      birdName: '',
      image: '',
      user: ''

    })
  }

  render () {
    return (
      <div>
        <h1>Birds</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
                  placeholder="Enter Bird Name"
                  name="birdName"
                  value={this.state.birdName}
                  onChange={this.handleChange}/>

            <input type="text"
                    placeholder="Add Image"
                    name="image"
                    value={this.state.image}
                    onChange={this.handleChange}
                    />

            <input type="text"
                    placeholder="Enter User"
                    name="user"
                    value={this.state.user}
                    onChange={this.handleChange}
                    />
            <input type="submit"/>


        </form>


          {this.state.birds.map((bird, i) => (
          <li className="birds" key={i}>
              <img src={bird.image} />
              <br />
              <p>Bird: {bird.birdName}</p>
              User: {bird.user}
              <hr />
          </li>


          ))}




      </div>
    )
  }
}

export default App;
