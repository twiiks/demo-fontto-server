import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {Header} from '../components/Header';

import {
    Background,
    ContentWrapper,
    Content, Title, SubTitle,
    EmailTextField,
    GoToCanvasMakeButton,
    GoToUploadMakeButton
} from '../styles/pages/EmailStyle';


export class Email extends Component {
    render() {
        return (
            <div className="index">
                <Background>
                    <Header backLink='/demo'/>
                    <ContentWrapper>
                        <Content>
                            <Title>메일주소 등록하기</Title>
                            <SubTitle>
                                폰트 생성 후, 해당 이메일로<br/>
                                파일을 보내드리기 위해 입력받는 이메일입니다.
                            </SubTitle>
                            <EmailTextField/>
                            <Link to='/demo/canvas'>
                                <GoToCanvasMakeButton label='글자 작성으로 시작하기'/>
                            </Link>
                            {/*<Link to='/demo/upload'>*/}
                                <GoToUploadMakeButton label='이미지 업로드로 시작하기'/>
                            {/*</Link>*/}
                        </Content>
                    </ContentWrapper>
                </Background>
            </div>
        );
    }
}
