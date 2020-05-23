import React, {Component} from 'react';
import {CARD} from 'Config/enums';

import {Card, CardNumber} from './styles';

class CardComponent extends Component {
  render() {
    const {
      cardObj: {
        side,
        number,
        flip
      },
      onClickHandler
    } = this.props;

    const isClickable = !!onClickHandler;

    return (
      <Card
        side={side}
        isClickable={isClickable}
        onClick={() => {
          if (isClickable) {
            onClickHandler(number);
            flip();
          }
        }}
      >
        <CardNumber>
          {side === CARD.NUMBER_SIDE ? number : ''}
        </CardNumber>
      </Card>
    );
  }
}

export default CardComponent;
