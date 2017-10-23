import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {BackgroundBlack, Content, ContentWrapper} from "../styles/CommonStyle";
import {
    TitleUpper, Title,
    Description,
    ButtonWrapper, GoToEmailButton
} from '../styles/pages/IndexStyle';

export class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="index">
                <BackgroundBlack>
                    <ContentWrapper animationTime={0}>
                        <Content>
                            <TitleUpper>create your creativity</TitleUpper>
                            <Title>fontto</Title>

                            <Description>
                                본 페이지는 fontto 의 데모페이지입니다.<br/>
                                예쁜 손글씨로 폰트를 만들어 보세요.<br/>
                            </Description>

                            <ButtonWrapper>
                                <Link to='/demo/email'>
                                    <GoToEmailButton label='폰트 만들기 >'/>
                                </Link>
                            </ButtonWrapper>
                        </Content>
                    </ContentWrapper>
                </BackgroundBlack>
            </div>
        );
    }
}
