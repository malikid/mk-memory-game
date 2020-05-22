import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import map from 'lodash/map';

import './index.css';

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
      <div className='memory-game-page-container'>
        <div className='cards-container'>
          {cardElements}
        </div>
        <div className='button-row'>
          {!isPlaying && <div className='start-button'>Start playing</div>}
          {!isPlaying && <div className='history-button'>History</div>}
        </div>
      </div>
    );
  }
}

export default MemoryGamePage;
