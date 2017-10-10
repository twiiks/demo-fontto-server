import styled, {keyframes} from 'styled-components';

import {fadeInRight} from 'react-animations'
const animation_fadeInRight = keyframes`${fadeInRight}`;


const BackgroundWhite = styled.div`
  background-image: linear-gradient(rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0.96)),
  url('/images/demo_background.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
`;

const BackgroundBlack = styled.div`
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
  //border: 1px solid red;
  animation: ${animation_fadeInRight} ${props => props.animationTime}s linear;
`;


const Content = styled.div`
  display: table-cell; 
  vertical-align: middle;
`;


export {
    BackgroundBlack,
    BackgroundWhite,
    ContentWrapper,
    Content
}