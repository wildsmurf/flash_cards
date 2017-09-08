import React from 'react';
import { Button } from 'semantic-ui-react'

class FlashCardForm extends React.Component {

  state = {
    front: '',
    back: ''
  }

  addFlashCard = (e) => {
    e.preventDefault();
    const { front, back } = this.state;
    this.props.addCard({front, back})
    this.setState({ front: '', back: '' })
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <form ref="form" onSubmit={this.addFlashCard}>
        <input
          name='front'
          value={this.state.front}
          onChange={this.handleChange}
          ref="card"
          placeholder="Add a Flash Card Hopefully"
        />
        <input
          name='back'
          value={this.state.back}
          onChange={this.handleChange}
          ref="card"
          placeholder="Add a Flash Card Hopefully"
        />
        <Button type='submit'>Click Here</Button>
      </form>
    )
  }
}


export default FlashCardForm;
