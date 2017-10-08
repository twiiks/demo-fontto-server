import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {
    Background,
    ContentWrapper,
    TitleUpper, Title,
    Description,
    ButtonWrapper, GoToMakeButton, GoToGithubButton,
    Content,
} from '../styles/pages/IndexStyle';


export class Index extends Component {
    render() {
        return (
            <div className="index">
                <Background>
                    <ContentWrapper>
                        <Content>
                            <TitleUpper>create your creativity</TitleUpper>
                            <Title>fontto</Title>

                            <Description>
                                여러분의 손글씨를 손쉽게 폰트 만들어 보세요! <br/>
                                본 페이지는 fontto 의 데모페이지입니다.<br/>
                                예쁜 손글씨로 폰트를 만들어 보세요.<br/>
                            </Description>

                            <ButtonWrapper>
                                <GoToMakeButton label='폰트 만들기 >'/>
                            </ButtonWrapper>
                        </Content>
                    </ContentWrapper>
                </Background>
            </div>
        );
    }
}
