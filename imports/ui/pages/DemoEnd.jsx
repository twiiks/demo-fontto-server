import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Header} from "../components/Header";
import {Loading} from "../components/Loading";

import {BackgroundBlack, Content, ContentWrapper} from "../styles/CommonStyle";
import {
    TitleUpper, Title,
    Description, ImagesWrapper
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
        })
    }

    getImageTag(imageUrl, key) {
        return (
            <img style={{margin: 2}} key={key} src={imageUrl} width={120} height={120}></img>
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
                <BackgroundBlack>
                    <Loading/>
                    <Header backLink='/demo'/>
                    <ContentWrapper animationTime={0}>
                        <Content>
                            <TitleUpper>create your creativity</TitleUpper>
                            <Title>fontto</Title>

                            <Description>
                                감사합니다. 최종 버전에서는 입력한 손글씨 혹은 업로드한 이미지로 <br/>
                                폰트가 생성됩니다.<br/>
                            </Description>

                            <ImagesWrapper>
                                {imagesTag}
                            </ImagesWrapper>

                        </Content>
                    </ContentWrapper>
                </BackgroundBlack>
            </div>
        );
    }
}
