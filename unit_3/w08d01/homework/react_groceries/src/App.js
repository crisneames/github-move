import React, { Component } from 'react';
import items from './data.js';

// console.log(items)

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: items,
      item: '',
      brand: '',
      units: '',
      quantity: 0,
      IsPurchased: false,
    }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(event) {
        console.log(event.target.value);
        this.setState({ [event.target.id]: event.target.value })}

  handleSubmit(event) {
    event.preventDefault()
    const newItem = {
      item: this.state.item,
      quantity: this.state.quantity,
      units: this.state.units
    }
    this.setState({
      items: [newItem, ...this.state.items],
      item: '',
      quantity: 0,
      units: ''
    })
  }

  render () {
    //console.log(items);
    return (
      <div className="container">
        <h2>React Groceries</h2>
      <form onSubmit={this.handleSubmit}>
          <label htmlFor="item">Item</label>
          <input
            type="text"
            value={this.state.item}
            onChange={this.handleChange}
            id="item"
            />
          <br />

            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              value={this.state.quantity}
              onChange={this.handleChange}
              id="Quantity"
              />
            <br />

              <label htmlFor="units">Units</label>
              <input
                type="text"
                value={this.state.units}
                onChange={this.handleChange}
                id="units"
                />
              <input type="submit" />
              <br />
        </form>

  <div>
  <h3>Preview our new item</h3>

  Item: {this.state.item} <br></br>
Quantity: {this.state.quantity} <br></br>
  Units: {this.state.units}
</div>

<ul>
{this.state.items.map(items =>
    <li>{items.item} {items.quantity} {items.units}</li>

)
}
</ul>
    </div>
  )
}
}

export default App;
