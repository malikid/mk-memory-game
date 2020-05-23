import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import map from 'lodash/map';

import {
  PageContainer,
  Question,
  CardsContainer,
  ButtonsContainer,
  ResultContainer,
  ResultText,
  ResultImage
} from './styles';
import {Button} from 'Styles/general';

import Card from 'Components/Card';

import {CARD, MEMORY_GAME_STATUS} from 'Config/enums';

@inject('store')
@observer
class MemoryGamePage extends Component {
  render() {
    const {
      numberOfCards,
      cards,
      cardClickHandler,
      questionForNumberOfCards,
      guideToStart,
      descriptionForRules,
      isAskingNumberOfCards,
      isReadyToPlay,
      isPlaying,
      isDone,
      startPlaying,
      resetTheRound,
      resultText,
      resultImageUrl,
    } = this.props.store.memoryGamePage;

    const cardElements = map(cards, (card, index) => (
      <Card
        key={index}
        cardObj={card}
        isTranslucent={isDone && card.side === CARD.BLANK_SIDE}
        onClickHandler={
          isAskingNumberOfCards || (isPlaying && card.side === CARD.BLANK_SIDE) ? cardClickHandler : undefined
        }
      />
    ));
    
    return (
      <PageContainer>
        <Question>
          {isAskingNumberOfCards ? questionForNumberOfCards : (
            isReadyToPlay ? guideToStart : descriptionForRules
          )}
        </Question>
        <CardsContainer>
          {cardElements}
        </CardsContainer>
        <ButtonsContainer>
          <Button disabled={isAskingNumberOfCards} onClick={isPlaying || isDone ? resetTheRound : startPlaying}>
            {isPlaying || isDone ? 'Reset' : 'Start'}
          </Button>
          <Button disabled={true}>History</Button>
        </ButtonsContainer>
        {isDone && <ResultContainer>
          <ResultText>{resultText}</ResultText>
          <ResultImage src={resultImageUrl} />
        </ResultContainer>}
      </PageContainer>
    );
  }
}

export default MemoryGamePage;
