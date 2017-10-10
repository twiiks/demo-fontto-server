import React, {Component} from 'react';

import styled, {keyframes} from 'styled-components';
import {RaisedButton} from 'material-ui';

import {fadeIn, fadeInUp} from 'react-animations'

const animation_fadeIn = keyframes`${fadeIn}`;
const animation_fadeInUp = keyframes`${fadeInUp}`;

const Title = styled.div`
  color: #333333;
  margin: 10px;
  font-size: 25px;
`;

const String = styled.div`
  text-align: center;
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
                          backgroundColor='#f5f5f5'/>
        )
    }
}

export {
    Title,
    String, C,
    HandwriteSubmitButton,
    HandwriteSubmitButtonWrapper,
    CanvasWrapper
};