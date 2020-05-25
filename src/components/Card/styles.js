import React from 'react';
import styled from 'styled-components';

import {CARD} from 'Config/enums';

export const Card = styled.div`
  margin: 20px;
  width: 150px;
  height: 210px;
  ${({side, isTranslucent}) => {
    if (isTranslucent) {
      return `position: relative;
        &::after {
          width: 100%;
          height: 100%;
          content: "";
          background: url('images/playing-card-back.jpg');
          background-size: contain;
          opacity: 0.5;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          position: absolute;
          z-index: -1;
        }
      `;
    }

    switch(side) {
      case CARD.NUMBER_SIDE:
        return `
          border: 1px solid black;
          border-radius: 6px;`;
      default:
        return `
          background-image: url('images/playing-card-back.jpg');
          background-size: contain;`;
    }
  }}
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({isClickable}) => isClickable && `
    cursor: pointer;

    &:hover {
      transform: translate(-10px, -10px);
    }

    &:active {
      transform: scale(0.95);
    }`
  }
`;

export const CardNumber = styled.div`
  font-size: xxx-large;
`;
