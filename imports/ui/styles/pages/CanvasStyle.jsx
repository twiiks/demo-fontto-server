import React, {Component} from 'react';

import styled, {keyframes} from 'styled-components';
import {RaisedButton} from 'material-ui';

import {fadeInRight} from 'react-animations'

const animation_fadeInRight = keyframes`${fadeInRight}`;

const Title = styled.div`
  color: #333333;
  margin: 10px;
  font-size: 25px;
  animation: ${animation_fadeInRight} .3s linear;
`;

const SubDesc = styled.span`
  font-size: 12px;
  margin-left: 5px;
  color: #cccccc;
  animation: ${animation_fadeInRight} .3s linear;
`;

const String = styled.div`
  text-align: center;
  animation: ${animation_fadeInRight} .3s linear;
`;

const C = styled.span`
  color: ${props => props.color};
  margin: 3px;
  font-size: 18px;
`;

const CanvasWrapper = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const HandwriteSubmitButtonWrapper = styled.div`
  position: fixed;
  bottom: 10px;
  left: 10px;
  right: 10px;
 
`;

class HandwriteSubmitButton extends Component {
    render() {
        return (
            <RaisedButton fullWidth={true}
                          label={this.props.label}
                          backgroundColor='#f5f5f5'
                          onTouchEnd={this.props.onTouchEnd}
                          onClick={this.props.onClick}/>
        )
    }
}

export {
    Title, SubDesc,
    String, C,
    HandwriteSubmitButton,
    HandwriteSubmitButtonWrapper,
    CanvasWrapper,
};