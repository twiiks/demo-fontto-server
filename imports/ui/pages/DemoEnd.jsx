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
            targetKeys: ['AC10', 'C0AC', 'D569', 'B2C8', 'B2E4'],
            userImages: []
        };

    }

    componentDidMount() {
        const script = document.createElement('script');
        script.src = '/js/disqus.js';
        script.async = true;
        document.body.appendChild(script);

        const userImages = Meteor.call('getAllUserImages', function (err, res) {
            console.log('userImages : ');
            console.log(res);
            this.setState({
                userImages: res
            })
        }.bind(this));

    }

    getImageTag(imageUrl, key, width, height) {
        return (
            <img style={{margin: 2}} key={key} src={imageUrl} width={width} height={height}/>
        )
    }

    render() {
        let resultImages;
        let handwriteImages;
        let userImages;
        if (this.props.location.state) {
            resultImages = this.props.location.state.urls;
            handwriteImages = this.props.location.state.handwrites;
            userImages = this.state.userImages;
            console.log(this.props.location.state);
        }

        let resultImageTags = [];
        let handwriteImageTags = [];
        let userImageTags = [];

        if (resultImages && handwriteImages && userImages) {

            for (const i in this.state.targetKeys) {
                const key = this.state.targetKeys[i];
                resultImageTags.push(this.getImageTag(resultImages[key], key, 64, 64));
            }

            Object.keys(handwriteImages).forEach(function (key) {
                handwriteImageTags.push(this.getImageTag(handwriteImages[key], key, 64, 64));
            }.bind(this));

            for (const i in this.state.userImages) {
                const dataObject = this.state.userImages[i];
                userImageTags.push(this.getImageTag(dataObject.url, dataObject._id, 32, 32))
            }


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
                        <ImagesWrapper>
                            {userImageTags}
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
