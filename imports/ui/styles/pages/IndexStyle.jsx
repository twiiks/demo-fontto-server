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

const ButtonWrapper = styled.div`
  margin-top: 30px;
  text-align: center;
  animation: ${animation_fadeInUp} 1.0s linear;
`;

class GoToEmailButton extends Component {
    render() {
        return (
            <FlatButton label={this.props.label}
                        backgroundColor='#f5f5f5'
                        style={{padding: '3px 10px', height: 'auto'}}/>
        )
    }
}

export {
    TitleUpper,
    Title,
    Description,
    ButtonWrapper,
    GoToEmailButton
};