import React, {Component} from 'react';
import {CARD} from 'Config/enums';

import {Card, CardNumber} from './styles';

class CardComponent extends Component {
  render() {
    const {
      side,
      number,
      onClickHandler
    } = this.props;

    return (
      <Card onClick={onClickHandler}>
        <CardNumber>
          {side === CARD.NUMBER_SIDE ? number : ''}
        </CardNumber>
      </Card>
    );
  }
}

export default CardComponent;
