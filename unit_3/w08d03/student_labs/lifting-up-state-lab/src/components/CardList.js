import React from "react";
import Card from './Card';
import AppHeader from './Header'

class CardContainer extends React.Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <div>
              <Card />
            </div>

      </div>
    );
  }
}

export default Card
