import React, {Component} from 'react';
import styled from 'styled-components';

import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

const Background = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
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
`;

const Content = styled.div`
  display: table-cell; 
  vertical-align: middle;
`;

const TitleUpper = styled.div`
  font-family: ‘Nanum Gothic’ ;
  color: #f5f5f5;
  text-align: center;
  font-size: 16px;
`;

const Title = styled.div`
  font-family: ‘Nanum Gothic’ ;
  color: #f5f5f5;
  text-align: center;
  font-size: 60px;
  font-weight: 600;
`;

const Description = styled.div`
  font-family: ‘Nanum Gothic’ ;
  font-weight: 100;
  font-size: 14px;
  color: #f5f5f5;
  margin-top: 20px;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  margin-top: 30px;
  text-align: center;
`;

class GoToMakeButton extends Component {
    render() {
        return (
            <FlatButton label={this.props.label}
                        href='/demo/upload'
                        backgroundColor='#f5f5f5'
                        style={{padding: '3px 10px', height: 'auto'}}/>
        )
    }
}


export {
    Background,
    ContentWrapper,
    TitleUpper,
    Title,
    Description,
    ButtonWrapper,
    GoToMakeButton,
    Content
};