import React, {Component} from 'react';

import styled, {keyframes} from 'styled-components';
import {FlatButton} from 'material-ui';

import {fadeIn, fadeInUp} from 'react-animations'
const animation_fadeIn = keyframes`${fadeIn}`;
const animation_fadeInUp = keyframes`${fadeInUp}`;

const TitleUpper = styled.div`
  color: #f5f5f5;
  text-align: center;
  font-size: 16px;
  animation: ${animation_fadeIn} .5s linear;
`;

const Title = styled.div`
  color: #f5f5f5;
  text-align: center;
  font-size: 60px;
  font-weight: 600;
  animation: ${animation_fadeIn} .5s linear;
`;

const Description = styled.div`
  font-weight: 100;
  font-size: 14px;
  color: #f5f5f5;
  margin-top: 20px;
  text-align: center;
  animation: ${animation_fadeIn} .5s linear;
`;

const ImagesWrapper = styled.div`
  margin: 20px auto;
  text-align: center;
`;

export {
    TitleUpper,
    Title,
    Description,
    ImagesWrapper
};