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

const MaxedContentsWrapper = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const CanvasWrapper = styled.div`
  margin-top: 10px;
  height: ${props => props.height}px;
  //border: 1px solid blue;
`;

const DescWrapper = styled.div`
  height: 20px;
  //border: 1px solid red;
`;

const ToWriteFontDesc = styled.div`
  //border: 1px solid green;
  overflow: hidden;
  height: 20px;
  float: left;
  width: ${props => props.width}px;
`;

const CanvasDesc = styled.div`
  text-align: center;
  //border: 1px solid yellow;
  overflow: hidden;
  height: 20px;
  float: right;
  width: ${props => props.width}px;
`;

const ToWriteFontWrapper = styled.div`
  //border: 1px solid black;
  float: left;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  display: table;
`;

const ToWriteFont = styled.div`
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  font-size: ${props => props.fontSize}px;
`;

const HandwriteSubmitButtonWrapper = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
`;

const Separator = styled.div`
  height: 20px;
  border-bottom: 1px solid #bbbbbb;
  margin-bottom: 20px;
`;

class HandwriteSubmitButton extends Component {
    render() {
        return (
            <RaisedButton fullWidth={true}
                          label={this.props.label}
                          backgroundColor='#f5f5f5'
                          onClick={this.props.onClick}/>
        )
    }
}


export {
    Title, SubDesc, MaxedContentsWrapper, ToWriteFontDesc,
    String, C, DescWrapper, CanvasDesc,
    HandwriteSubmitButton,
    HandwriteSubmitButtonWrapper,
    ToWriteFontWrapper,
    ToWriteFont,Separator,
    CanvasWrapper,
};