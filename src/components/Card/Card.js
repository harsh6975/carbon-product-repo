import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children} card</div>
  );
};

export default Card;
