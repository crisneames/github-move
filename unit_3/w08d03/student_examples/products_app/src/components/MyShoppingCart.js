import React, { Component } from 'react';


class MyShoppingCart extends Component {
  render() {
    return (
      <div className="MyShoppingCart">
        <h2>Your Cart!</h2>
        {
//first step to display datais to write map function
          this.props.cart.map((item, index) => {
            return (
              <li>
                {item.name}{''}{item.price}
              </li>
            )
          })

        }
      </div>
    );
  }
}

export default MyShoppingCart;
