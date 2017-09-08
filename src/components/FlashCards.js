import React from 'react';
import Card from './Card';

class FlashCards extends React.Component {
  render() {
    let cards = this.props.cards.map( (card) => {
      return (
        <Card front={card.front} back={card.back}/>
      )
    })
    return (
      <ul style={{ listStyle: 'none' }}>
      {cards}
      </ul>
    )
  }
}
export default FlashCards;
