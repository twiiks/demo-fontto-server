import React, {Component} from 'react';

import styled, {keyframes} from 'styled-components';
import {RaisedButton, TextField} from 'material-ui';

import {fadeInRight} from 'react-animations'
const animation_fadeInRight = keyframes`${fadeInRight}`;

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

class GoToCanvasMakeButton extends Component {
    render() {
        return (
            <RaisedButton onClick={this.props.onClick}
                          fullWidth={true}
                          label={this.props.label}
                          backgroundColor='#f5f5f5'
                          style={{
                              marginTop: '20px'
                          }}/>
        )
    }
}

class GoToUploadMakeButton extends Component {
    render() {
        return (
            <RaisedButton disabled={true}
                          fullWidth={true}
                          label={this.props.label}
                          backgroundColor='#f5f5f5'
                          style={{
                              marginTop: '20px'
                          }}/>
        )
    }
}


class EmailTextField extends Component {
    render() {
        return (
            <TextField
                onChange={this.props.onChange}
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
    Title, SubTitle,
    EmailTextField,
    GoToCanvasMakeButton,
    GoToUploadMakeButton
};