import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {BackgroundBlack, Content, ContentWrapper} from "../styles/CommonStyle";
import {
    TitleUpper, Title,
    Description,
    ButtonWrapper, GoToEmailButton
} from '../styles/pages/IndexStyle';


export class DemoEnd extends Component {
    constructor(props) {
        super(props);
        Meteor.logout(); // 페이지 들어가면 로그아웃
    }

    render() {
        let imageData = null;
        if (this.props.location.state['44256']) {
            imageData = this.props.location.state['44256'];
            imageData = 'data:image/jpeg;base64,' + imageData;
            console.log(imageData);
        }

        let imageTag;
        if(imageData){
            imageTag = <img src={imageData} width={200} height={200}></img>
        } else {
            imageTag = null
        }

        return (
            <div className="index">
                <BackgroundBlack>
                    <ContentWrapper animationTime={0}>
                        <Content>
                            <TitleUpper>create your creativity</TitleUpper>
                            <Title>fontto</Title>

                            <Description>
                                감사합니다. 입력한 손글씨 혹은 업로드한 이미지로 폰트가 생성 중입니다.<br/>
                                생성된 폰트는 입력하신 메일 주소로 발송해 드립니다 :)<br/>
                                페이지를 나가셔도 됩니다!
                            </Description>
                            {imageTag}

                        </Content>
                    </ContentWrapper>
                </BackgroundBlack>
            </div>
        );
    }
}
