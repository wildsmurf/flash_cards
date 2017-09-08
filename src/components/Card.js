import React from 'react';

const Card = ({ front, back }) => (
  <li>{front}</li>
)

export default Card


// change comp to class comp as you will need state
// state = { showBack: false }
// on card click, call a function that changes the state to true
// inside card render, use if else statment to choose what you render
