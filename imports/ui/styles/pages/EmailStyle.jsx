import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';

import {RaisedButton, TextField} from 'material-ui';

import {fadeInRight} from 'react-animations'
const animation_fadeInRight = keyframes`${fadeInRight}`;

const Background = styled.div`
  background-image: linear-gradient(rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0.96)),
  url('/images/demo_background.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
`;


const ContentWrapper = styled.div`
  display: table;
  position: absolute;
  width: 80%;
  left: 10%;
  top: 10%;
  bottom: 10%;
  height: 80%;
  //border: 1px solid red;
  animation: ${animation_fadeInRight} .3s linear;
`;


const Content = styled.div`
  display: table-cell; 
  vertical-align: middle;
`;

const Title = styled.div`
  color: #333333;
  font-size: 30px;
`;

const SubTitle = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  color: #333333;
  font-size: 12px;
`;

class GoToMakeButton extends Component {
    render() {
        return (
            <RaisedButton fullWidth={true}
                        label={this.props.label}
                        backgroundColor='#f5f5f5'
                        style={{
                            marginTop: '20px'}}/>
        )
    }
}

class EmailTextField extends Component {
    render() {
        return (
            <TextField
                style={{marginTop: '10px', width: '100%'}}
                hintText="fontto@twiiks.co"
                hintStyle={{color: '#cccccc'}}
                floatingLabelText="이메일 주소를 입력해주세요"
                floatingLabelStyle={{color: '#aaaaaa'}}
                underlineFocusStyle={{borderColor: '#333333'}}
            />
        )
    }
}

export {
    Background,
    ContentWrapper,
    Content, Title, SubTitle,
    EmailTextField,
    GoToMakeButton
};