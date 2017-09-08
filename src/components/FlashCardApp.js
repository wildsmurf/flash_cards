import React from 'react';
import FlashCards from './FlashCards';
import FlashCardForm from './FlashCardForm';

class FlashCardApp extends React.Component {
  state = {
    cards: []
  }

  addCard = ({front, back}) => {
    let card = {front, back}
    this.setState({
      cards: [...this.state.cards, card]
    })
  }
  // addCard = (name) => {
  //
  // }
  render(){
    return(
      <div>
        <FlashCardForm addCard={this.addCard} />
        <FlashCards cards={this.state.cards} />
      </div>
    )
  }
}

export default FlashCardApp;
