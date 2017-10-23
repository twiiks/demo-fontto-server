import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Header} from "../components/Header";
import {Loading} from "../components/Loading";

import {BackgroundWhite, Content, ContentWrapper} from "../styles/CommonStyle";
import {
    TitleUpper, Title, Separator,
    Description, ImagesWrapper, DisqusWrapper, DemoEndWrapper
} from '../styles/pages/DemoEndStyle';


export class DemoEnd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            response: {},
            targetKeys: ['AC10', 'C0AC', 'D569', 'B2C8', 'B2E4']
        };
        // Meteor.logout(); // 페이지 들어가면 로그아웃
    }

    componentDidMount() {
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
        let resultImages;
        let handwriteImages;
        if (this.props.location.state) {
            resultImages = this.props.location.state.urls;
            handwriteImages = this.props.location.state.handwrites;

            console.log(this.props.location.state);
        }

        let resultImageTags = [];
        let handwriteImageTags = [];

        if (resultImages && handwriteImages) {

            for(const i in this.state.targetKeys){
                const key = this.state.targetKeys[i];
                if(handwriteImages[key]){
                    resultImageTags.push(this.getImageTag(handwriteImages[key], key));
                } else{
                    resultImageTags.push(this.getImageTag(resultImages[key], key));
                }
            }

            Object.keys(handwriteImages).forEach(function (key) {
                handwriteImageTags.push(this.getImageTag(handwriteImages[key], key));
            }.bind(this));

        } else {
            resultImageTags = null
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
                            감사합니다.<br/>
                            현재 fontto 는 세명의 개발자가 열심히 개발 중에 있습니다.
                            <br/><br/>
                            아래의 '감사합니다'는 입력된 손글씨를 데모 프로세스를 거쳐 생성한 것입니다.<br/>
                            자유롭게 공유하고 댓글로 소중한 의견을 남겨주시면 감사하겠습니다!

                            <br/>
                        </Description>

                        <Separator text='fontto 가 만든 결과!'/>
                        <ImagesWrapper>
                            {resultImageTags}
                        </ImagesWrapper>

                        <Separator text='여러분이 쓴 글자'/>
                        <ImagesWrapper>
                            {handwriteImageTags}
                        </ImagesWrapper>

                        <Separator text='다른 분들이 만든 감사합니다들입니다!'/>
                        <DisqusWrapper>
                            <div id="disqus_thread"/>
                        </DisqusWrapper>
                    </DemoEndWrapper>
                </BackgroundWhite>
            </div>
        );
    }
}
