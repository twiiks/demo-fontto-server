import React, {Component} from 'react';

import {Header} from '../components/Header';
import {Loading} from '../components/Loading';

import {BackgroundWhite} from "../styles/CommonStyle";
import {CanvasComponent} from "../components/CanvasComponent";
import {
    Title, SubDesc, ToWriteFont, ToWriteFontWrapper, ToWriteFontDesc,
    String, C, MaxedContentsWrapper, DescWrapper, CanvasDesc, InformationTitle,
    CanvasWrapper, HandwriteSubmitButton, Separator, InfomationWrapper,
    HandwriteSubmitButtonWrapper, InformationContent, NextFontButton, SubmitFontButton,
    PercentInfoWrapper,Percent
} from "../styles/pages/CanvasStyle";

export class Canvas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
            currentChar: 0,
            maxWidth: 600,
            loading: false,
            toWriteFonts: '영원히끓을거라믿었던나의젊음돌아봤더니후회뿐',
            currentPercent: 0,
            writtenFonts: '',
            currentJob: '',
            filePaths: []
        };
        this.updateWindowDimensions =
            this.updateWindowDimensions.bind(this);
        this.onHandWriteSubmitButton =
            this.onHandWriteSubmitButton.bind(this);

        Meteor.call('updateCount');
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    onHandWriteSubmitButton() {
        let filebase64 = this.refs.canvasComponent.getCanvasBuffer();

        // if (!Meteor.user()) {
        //     alert('로그인 후에 이용해주세요!');
        //     this.props.history.push('/demo/email');
        //     return;
        // }

        // this.setState({loading: true});
        // const label = this.state.string[this.state.currentChar];
        //
        // Meteor.call('uploadHandwriteToS3', filebase64, label,
        //     function (err, res) {
        //         this.refs.canvasComponent.clearCanvas();
        //         const appendedFilePaths = this.state.filePaths;
        //         appendedFilePaths.push(res);
        //         this.setState({
        //             currentChar: this.state.currentChar + 1,
        //             filePaths: appendedFilePaths
        //         });
        //
        //
        //         // 모든 글자 다 입력했으면 다음페이지로
        //         if (this.state.currentChar === this.state.string.length) {
        //             // if(this.state.currentChar === 1){
        //             // processing start
        //             Meteor.call('requestToProcessingServer', appendedFilePaths,
        //                 function (err, imageBufferList) {
        //                     // console.log(imageBufferList);
        //                     this.props.history.push({
        //                         pathname: '/demo/end',
        //                         state: imageBufferList
        //                     });
        //
        //                     this.setState({loading: false});
        //                 }.bind(this));
        //
        //         } else {
        //             this.setState({loading: false});
        //         }
        //     }.bind(this))

    }


    render() {
        // 캔버스 사이즈 조정
        let canvasSize;
        if (this.state.width > this.state.maxWidth) {
            canvasSize = 280;
        } else {
            canvasSize = this.state.width / 2 - 30;
        }

        // 글자 상단 다음글자들 모임
        const toWriteFonts = this.state.toWriteFonts;
        const toWriteSpanList = [];
        for (let i in toWriteFonts) {
            if (i < this.state.currentChar) {
                continue;
            } else if (i == this.state.currentChar) {
                toWriteSpanList.push(<C color='#111111' key={i}>{toWriteFonts[i]}</C>)
            } else {
                toWriteSpanList.push(<C color='#dddddd' key={i}>{toWriteFonts[i]}</C>)
            }
        }

        // 하단부분 height 높이결정
        let informationSize = this.state.height - canvasSize - 250;

        // 퍼센트 폰트 사이즈 결정
        let percentFontSize = canvasSize / 2.5;


        // 현재 작업 변경
        let currentJob = '';
        if(this.state.currentJob === ''){
            currentJob = '진행중인 작업이 없습니다.'
        } else {
            currentJob = this.state.currentJob;
        }

        // 작성된 글자 변경
        let writtenFonts = '';
        if(this.state.writtenFonts === ''){
            writtenFonts = '글자를 작성해보세요!';
        } else {
            writtenFonts = this.state.writtenFonts;
        }

        return (
            <div className="index">
                <BackgroundWhite>
                    <Header backLink='/'/>
                    <Loading on={this.state.loading}/>
                    <Title>폰트 만들기<SubDesc> 한글자씩 작성하고 버튼을 눌러주세요.</SubDesc></Title>
                    <MaxedContentsWrapper maxWidth={this.state.maxWidth}>
                        <DescWrapper>
                            <ToWriteFontDesc width={canvasSize}>
                                {toWriteSpanList}
                            </ToWriteFontDesc>
                            <CanvasDesc width={canvasSize}>
                                아래에 따라써주세요
                            </CanvasDesc>
                        </DescWrapper>
                        <CanvasWrapper height={canvasSize}>
                            <ToWriteFontWrapper width={canvasSize}
                                                height={canvasSize}>
                                <ToWriteFont fontSize={canvasSize * 3 / 5}>
                                    {this.state.toWriteFonts[this.state.currentChar]}
                                </ToWriteFont>
                            </ToWriteFontWrapper>
                            <CanvasComponent width={canvasSize}
                                             height={canvasSize}
                                             lineWidth={canvasSize / 25}
                                             ref='canvasComponent'/>
                        </CanvasWrapper>

                        <Separator/>

                        <InfomationWrapper height={informationSize}>
                            <PercentInfoWrapper>
                                <Percent fontSize={percentFontSize}>
                                    {this.state.currentPercent}%
                                </Percent>
                            </PercentInfoWrapper>
                            <div>
                                <InformationTitle>
                                    현재 작업
                                </InformationTitle>
                                <InformationContent>
                                    {currentJob}
                                </InformationContent>
                            </div>
                            <div>
                                <InformationTitle>
                                    작성된 글자
                                </InformationTitle>
                                <InformationContent>
                                    {writtenFonts}
                                </InformationContent>
                            </div>
                            <NextFontButton/>
                            <SubmitFontButton/>
                        </InfomationWrapper>

                        {/*<HandwriteSubmitButtonWrapper>*/}
                        {/*<HandwriteSubmitButton*/}
                        {/*label='다음 글자 작성하기'*/}
                        {/*onClick={this.onHandWriteSubmitButton}/>*/}
                        {/*</HandwriteSubmitButtonWrapper>*/}
                    </MaxedContentsWrapper>
                </BackgroundWhite>
            </div>
        );
    }
}
