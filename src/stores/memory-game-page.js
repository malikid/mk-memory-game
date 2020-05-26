import {observable, action, computed} from 'mobx';
import {forEach, random} from 'lodash';

import {CARD, MEMORY_GAME_STATUS} from 'Config/enums';
import CardObject from 'Objects/CardObject';

import ReactGA from 'react-ga';

class MemoryGame {
  questionForNumberOfCards = 'How many cards would you like to play?';
  guideToStart = 'Please click start once you memorize everything.'
  descriptionForRules = 'Please pick the cards in ascending order.';

  cardNumbersInOrder;
  resultTexts = {
    win: 'YOU WIN!',
    lose: 'LOSER!'
  };
  resultImagesFileNames = {
    win: ['champaign', 'cheers', 'congrats', 'great', 'yeah', 'yes'],
    lose: ['cry', 'heehee', 'no', 'ohno', 'urrr', 'what']
  };

  @observable numberOfCards;
  @observable cards;
  @observable status;
  @observable resultText;
  @observable resultImageUrl;

  constructor() {
    this.resetTheRound();
  }

  @computed
  get isAskingNumberOfCards() {
    return this.status === MEMORY_GAME_STATUS.IS_ASKING_NUMBER_OF_CARDS;
  }

  @computed
  get isReadyToPlay() {
    return this.status === MEMORY_GAME_STATUS.IS_READY_TO_PLAY;
  }

  @computed
  get isPlaying() {
    return this.status === MEMORY_GAME_STATUS.IS_PLAYING;
  }

  @computed
  get isDone() {
    return this.status === MEMORY_GAME_STATUS.IS_DONE;
  }

  @action
  setNumberOfCards = (value) => {
    this.numberOfCards = value;
  }

  @action
  setStatus = (status) => {
    this.status = status;
    ReactGA.event({
      category: 'Status',
      action: 'Update',
      value: this.isAskingNumberOfCards ? 'IS ASKING NUMBER OF CARDS' : (
        this.isReadyToPlay ? 'IS READY TO PLAY' : (
          this.isPlaying ? 'IS PLAYING' : this.resultText
        )
      )
    });
  }

  @action
  setResultText = (text) => {
    this.resultText = text;
  }

  @action
  setResultImageUrl = (image) => {
    this.resultImageUrl = image;
  }

  @action
  generateCards = (number) => {
    this.cards.clear();
    let card;
    for(let i = 0; i < number; i++) {
      card = new CardObject({side: CARD.NUMBER_SIDE});
      this.cards.push(card);
      this.cardNumbersInOrder.push(card.number);
    }
    this.cardNumbersInOrder.sort(function(a, b) {return a - b;});
  }

  @action
  chooseNumberOfCards = (number) => {
    this.setNumberOfCards(number);
    this.generateCards(number);
  }

  @action
  cardClickHandler = (cardNumber) => {
    if(this.isAskingNumberOfCards) {
      this.chooseNumberOfCards(cardNumber)
      this.setStatus(MEMORY_GAME_STATUS.IS_READY_TO_PLAY);
      return;
    }

    if(this.isReadyToPlay || this.isDone) {
      return;
    }

    this.checkTheNumber(cardNumber);
  }

  @action
  startPlaying = () => {
    forEach(this.cards, card => {
      card.flip();
    });
    this.setStatus(MEMORY_GAME_STATUS.IS_PLAYING);
  }

  @action
  resetTheRound = () => {
    this.setNumberOfCards(3);
    this.setStatus(MEMORY_GAME_STATUS.IS_ASKING_NUMBER_OF_CARDS);
    this.cards = [
      new CardObject({number: 4, side: CARD.NUMBER_SIDE}),
      new CardObject({number: 8, side: CARD.NUMBER_SIDE}),
      new CardObject({number: 12, side: CARD.NUMBER_SIDE})
    ];
    this.cardNumbersInOrder = [];
  }

  @action
  challengeDone = (result) => {
    this.setResultText(this.resultTexts[result]);
    this.setStatus(MEMORY_GAME_STATUS.IS_DONE);
    const resultImagePath = `images/${this.resultImagesFileNames[result][random(5)]}.png`;
    this.setResultImageUrl(resultImagePath);
  }

  @action
  checkTheNumber = (cardNumber) => {
    if (cardNumber !== this.cardNumbersInOrder.shift()) {
      this.challengeDone('lose');
      return;
    }
    if (this.cardNumbersInOrder.length === 0) {
      this.challengeDone('win');
    }
  }
};

export default MemoryGame;
