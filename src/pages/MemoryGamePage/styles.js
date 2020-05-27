import React from 'react';
import styled from 'styled-components';
import {Button} from 'Styles/general';

export const PageContainer = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Question = styled.div`
  margin: 50px 0 30px;
  font-size: xx-large;
`;

export const CardsContainer = styled.div`
  width: 800px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const ButtonsContainer = styled.div`
  margin: 30px 0 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ResultContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  pointer-events: none;
`;

export const ResultText = styled.div`
  margin-top: 50px;
  font-size: xxx-large;
  font-weight: bolder;
  color: orangered;
`;

export const ResultImage = styled.img`
`;
