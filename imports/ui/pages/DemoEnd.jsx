import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Header} from "../components/Header";
import {Loading} from "../components/Loading";

import {BackgroundWhite, Content, ContentWrapper} from "../styles/CommonStyle";
import {
    TitleUpper, Title,
    Description, ImagesWrapper, DisqusWrapper, DemoEndWrapper
} from '../styles/pages/DemoEndStyle';


export class DemoEnd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            response: {}
        }
        // Meteor.logout(); // 페이지 들어가면 로그아웃
    }

    componentDidMount() {
        // console.log(this.props.location.state);
        const requests = this.props.location.state;
        const response = Meteor.call('dumyRequestToProcessingServer', requests);
        this.setState({
            response: response,
            loading: false
        });

        const script = document.createElement('script');
        script.src = '/js/disqus.js';
        script.async = true;
        document.body.appendChild(script);
    }

    getImageTag(imageUrl, key) {
        return (
            <img style={{margin: 2}} key={key} src={imageUrl} width={64} height={64}></img>
        )
    }

    render() {
        let imagesData;
        if (this.props.location.state) {
            imagesData = this.props.location.state.urls;
        }

        let imagesTag = [];
        if (imagesData) {
            console.log(imagesData);
            Object.keys(imagesData).forEach(function (key) {
                imagesTag.push(this.getImageTag(imagesData[key], key))
            }.bind(this));
        } else {
            imagesTag = null
        }

        return (
            <div className="index">
                <BackgroundWhite>
                    <Loading/>
                    <Header backLink='/demo'/>
                    <DemoEndWrapper>
                        <TitleUpper>create your creativity</TitleUpper>
                        <Title>fontto</Title>

                        <Description>
                            감사합니다. fontto 가 최종적으로 완성되면, 앞에서 입력하신 메일로 먼저 발송해 드리겠습니다:)<br/>
                            현재 fontto 는 세명의 개발자가 열심히 개발 중에 있습니다.
                            <br/><br/>
                            아래의 '감사'는 입력된 손글씨를 데모 프로세스를 거쳐 생성한 것입니다.<br/>
                            자유롭게 공유하고 댓글로 소중한 의견을 남겨주시면 감사하겠습니다!

                            <br/>
                        </Description>

                        <ImagesWrapper>
                            {imagesTag}
                        </ImagesWrapper>

                        <DisqusWrapper>
                            <div id="disqus_thread"/>
                        </DisqusWrapper>
                    </DemoEndWrapper>
                </BackgroundWhite>
            </div>
        );
    }
}
