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
      onClickHandler,
      isTranslucent,
    } = this.props;

    const isClickable = !!onClickHandler;

    return (
      <Card
        side={side}
        isClickable={isClickable}
        isTranslucent={isTranslucent}
        onClick={() => {
          if (isClickable) {
            onClickHandler(number);
            flip();
          }
        }}
      >
        <CardNumber>
          {isTranslucent || side === CARD.NUMBER_SIDE ? number : ''}
        </CardNumber>
      </Card>
    );
  }
}

export default CardComponent;
