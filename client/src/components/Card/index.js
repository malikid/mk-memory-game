import React, {Component} from 'react';
import {CARD} from 'Config/enums';

import './index.css';

class Card extends Component {
  render() {
    const {
      side,
      number,
      onClickHandler
    } = this.props;

    return (
      <div className='card' onClick={onClickHandler}>
        <span className='card-number'>
          {side === CARD.NUMBER_SIDE ? number : ''}
        </span>
      </div>
    );
  }
}

export default Card;
