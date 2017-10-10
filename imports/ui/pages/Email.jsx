import React, {Component} from 'react';

import {Header} from '../components/Header';
import {Loading} from '../components/Loading';

import {
    Background,
    ContentWrapper,
    Content, Title, SubTitle,
    EmailTextField,
    GoToCanvasMakeButton,
    GoToUploadMakeButton
} from '../styles/pages/EmailStyle';


export class Email extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            email: ''
        };
        this.onGoToCanvasMakeButton =
            this.onGoToCanvasMakeButton.bind(this);
        this.onEmailChange =
            this.onEmailChange.bind(this);

        Meteor.logout(); // 페이지 들어가면 로그아웃
    }

    onGoToCanvasMakeButton() {
        if (this.state.email === '') { // 이메일 미입력
            alert('이메일을 입력해주세요!');
            return;
        }

        this.setState({loading: true});

        Meteor.call('resister', this.state.email,
            function (err, res) {

                if (res === false) { // 이메일 형식에 어긋나면
                    alert('이메일 형식을 확인하세요!');
                    this.setState({loading: false});
                    return;
                }

                if (err && err.error === 403) {
                    // 이미 존재한다면 일반적인 로그인 후 count 증가
                    Meteor.loginWithPassword(this.state.email, 'fontto');
                    Meteor.call('updateCount');
                }

                this.setState({loading: false});
                this.props.history.push('/demo/canvas');
            }.bind(this));


    }

    onEmailChange(e) {
        this.setState({email: e.target.value});
    }


    render() {
        return (
            <div className="index">
                <Loading on={this.state.loading}/>
                <Background>
                    <Header backLink='/demo'/>
                    <ContentWrapper>
                        <Content>
                            <Title>메일주소 등록하기</Title>
                            <SubTitle>
                                폰트 생성 후, 해당 이메일로<br/>
                                파일을 보내드리기 위해 입력받는 이메일입니다.
                            </SubTitle>
                            <EmailTextField onChange={this.onEmailChange}/>

                            <GoToCanvasMakeButton
                                label='글자 작성으로 시작하기'
                                onClick={this.onGoToCanvasMakeButton}/>

                            <GoToUploadMakeButton
                                label='이미지 업로드로 시작하기 (준비중입니다.)'/>
                        </Content>
                    </ContentWrapper>
                </Background>
            </div>
        );
    }
}
