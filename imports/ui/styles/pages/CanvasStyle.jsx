import React, {Component} from 'react';

import styled, {keyframes} from 'styled-components';
import {RaisedButton, FloatingActionButton} from 'material-ui';
import IconNext from 'material-ui/svg-icons/image/navigate-next';
import IconCheck from 'material-ui/svg-icons/navigation/check';

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

const C = styled.span`
  color: ${props => props.color};
  margin: 3px;
  font-size: 18px;
`;

const MaxedContentsWrapper = styled.div`
  padding: 20px;
  max-width: ${props => props.maxWidth}px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5vh;
`;

const CanvasWrapper = styled.div`
  margin-top: 10px;
  height: ${props => props.height}px;
  //border: 1px solid blue;
`;

const DescWrapper = styled.div`
  margin-bottom: 5px;
  height: 24px;
  //display:inline-block;
  //border: 1px solid red;
`;

const ToWriteFontDesc = styled.div`
  //border: 1px solid green;
  overflow: hidden;
  height: 24px;
  float: left;
  width: ${props => props.width}px;
`;

const CanvasDesc = styled.div`
  text-align: center;
  //border: 1px solid yellow;
  overflow: hidden;
  height: 20px;
  float: right;
  font-size: 18px;
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

const InfomationWrapper = styled.div`
  position: relative;
  height: ${props => props.height}px;
  //border: 1px solid red;
`;

const InformationTitle = styled.div`
  font-size: 18px;
  color: #333333;
  margin: 10px 56% 10px 10px;
`;

const InformationContent = styled.div`
  font-size: 14px;
  color: #999999;
  margin: 10px 56% 10px 10px;
  word-break: break-all;
`;

const PercentInfoWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 0;
  height: 100%;
  width: 50%;
  //border: 1px solid yellow;
`;

const Percent = styled.div`
  position: absolute;
  text-align: center;
  font-size: ${props => props.fontSize}px;
  width: 100%;
`;

class NextFontButton extends Component {
    render() {
        return (
            <FloatingActionButton
                disabled={this.props.disabled}
                onClick={this.props.onClick}
                backgroundColor='#444444'
                style={{
                    position: 'absolute',
                    bottom: 70,
                    right: -15
                }}>
                <IconNext/>
            </FloatingActionButton>
        )
    }
}


class SubmitFontButton extends Component {
    render() {
        return (
            <FloatingActionButton
                onClick={this.props.onClick}
                backgroundColor='#444444'
                // disabled={this.props.disabled}
                disabled={this.props.disabled}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    right: -15
                }}>
                <IconCheck/>
            </FloatingActionButton>
        )
    }
}

export {
    Title, SubDesc, MaxedContentsWrapper, ToWriteFontDesc,
    C, DescWrapper, CanvasDesc,
    InfomationWrapper, InformationTitle,
    InformationContent,
    HandwriteSubmitButtonWrapper,
    ToWriteFontWrapper,
    ToWriteFont, Separator,
    CanvasWrapper, NextFontButton, SubmitFontButton,
    PercentInfoWrapper, Percent
};