import React, {Component} from 'react';

import styled, {keyframes} from 'styled-components';
import {FlatButton, RaisedButton} from 'material-ui';

import {fadeIn, fadeInUp} from 'react-animations'

const animation_fadeIn = keyframes`${fadeIn}`;
const animation_fadeInUp = keyframes`${fadeInUp}`;

const TitleUpper = styled.div`
  color: #222222;
  text-align: center;
  font-size: 16px;
  animation: ${animation_fadeIn} .5s linear;
`;

const Title = styled.div`
  color: #222222;
  text-align: center;
  font-size: 60px;
  font-weight: 600;
  animation: ${animation_fadeIn} .5s linear;
`;

const Description = styled.div`
  font-weight: 100;
  font-size: 14px;
  color: #222222;
  margin-top: 20px;
  text-align: center;
  animation: ${animation_fadeIn} .5s linear;
`;

const ImagesWrapper = styled.div`
  margin: 20px auto;
  text-align: center;
`;

const DisqusWrapper = styled.div`
  width: 100%;
  height: auto;
`;

const DemoEndWrapper = styled.div`
  margin: 20px 20px 10px 20px;
`;

class Separator extends Component {
    render() {
        return (
            <div style={{
                textAlign: 'center',
                marginTop: 30,
                marginBottom: 10
            }}>
                <div style={{
                    height: 10,
                    borderBottom: '1px solid #ccc',
                    width: '15%',
                    float: 'left',
                    marginLeft: '10%'
                }}/>
                <div style={{
                    height: 10,
                    borderBottom: '1px solid #ccc',
                    width: '15%',
                    float: 'right',
                    marginRight: '10%'
                }}/>
                <div style={{
                    color: '#ccc'
                }}>{this.props.text}</div>
            </div>
        )
    }
}

class PollButton extends Component {
    render() {
        return (
            <RaisedButton
                href='https://docs.google.com/forms/d/e/1FAIpQLSdl0CQXp4q18cfgk3DgJCoNH8mJNM3qdh9pXv5VwemdGz-s3A/viewform'
                target='_blank'
                backgroundColor='#444444'
                label='스타벅스 기프티콘 받으러 가기!'
                fullWidth={true}
                labelColor='#ffffff'
            />
        )
    }
}


export {
    PollButton,
    Separator,
    TitleUpper,
    Title,
    Description,
    ImagesWrapper,
    DisqusWrapper,
    DemoEndWrapper
};