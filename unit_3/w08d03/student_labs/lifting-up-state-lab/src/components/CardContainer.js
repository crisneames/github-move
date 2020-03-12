import React from "react";
import CardList from './CardList';
import AppHeader from './Header'

class CardContainer extends React.Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <div>
              <CardList data={this.props.}/>
              <CardList />
            </div>

      </div>
    );
  }
}

export default CardContainer
