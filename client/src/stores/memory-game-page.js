import {observable, action} from 'mobx';

import {CARD} from 'Config/enums';

class MemoryGame {
  @observable numberOfCards = 4;
  @observable cards = [];
  @observable isPlaying = false;

  constructor() {
    this.generateCards(this.numberOfCards);
  }

  @action
  flip = () => {
    if(this.side === CARD.BLANK_SIDE) {
      this.side = CARD.NUMBER_SIDE;
    } else {
      this.side = CARD.BLANK_SIDE;
    }
  }

  @action
  generateCards = (number) => {
    let card;
    for(let i = 0; i < number; i++) {
      card = {
        number: Math.floor(Math.random() * 100 + 1),
        side: CARD.NUMBER_SIDE
      };
      this.cards.push(card);
    }
  }

  @action
  chooseNumberOfCards = (number) => {
    this.numberOfCards = number;
    this.generateCards(number);
  }
};

export default MemoryGame;
