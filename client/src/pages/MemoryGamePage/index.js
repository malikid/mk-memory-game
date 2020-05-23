import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import map from 'lodash/map';

import {
  PageContainer,
  CardsContainer,
  ButtonsContainer
} from './styles';
import {Button} from 'Styles/general';

import Card from 'Components/Card';

@inject('store')
@observer
class MemoryGamePage extends Component {
  render() {
    const {
      numberOfCards,
      cards,
      flip,
      isPlaying
    } = this.props.store.memoryGamePage;

    // if(!numberOfCards) {
    //   return (<div>How many cards would you like to play?</div>);
    // }

    const cardElements = map(cards, card => (
      <Card
        {...card}
        onClickHandler={flip}
      />
    ));
    
    return (
      <PageContainer>
        <CardsContainer>
          {cardElements}
        </CardsContainer>
        <ButtonsContainer>
          {!isPlaying && <Button>Start playing</Button>}
          {!isPlaying && <Button>History</Button>}
        </ButtonsContainer>
      </PageContainer>
    );
  }
}

export default MemoryGamePage;
