import React, {Component} from 'react';

import {Header} from '../components/Header';
import {Loading} from '../components/Loading';

import {BackgroundWhite} from "../styles/CommonStyle";
import {CanvasComponent} from "../components/CanvasComponent";
import {
    Title, SubDesc, ToWriteFont, ToWriteFontWrapper, ToWriteFontDesc,
    String, C, MaxedContentsWrapper, DescWrapper, CanvasDesc,
    CanvasWrapper, HandwriteSubmitButton, Separator,
    HandwriteSubmitButtonWrapper
} from "../styles/pages/CanvasStyle";

export class Canvas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
            currentChar: 0,
            loading: false,
            toWriteFonts: '영원히끓을거라믿었던나의젊음돌아봤더니후회뿐',
            string: [
                '누', '붐', '굶',
                '배', '셍', '잻',
                '취', '킝', '휅',],
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
        if (this.state.width > 800) {
            canvasSize = 370;
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

        return (
            <div className="index">
                <BackgroundWhite>
                    <Header backLink='/'/>
                    <Loading on={this.state.loading}/>
                    <Title>폰트 만들기<SubDesc> 한글자씩 작성하고 버튼을 눌러주세요.</SubDesc></Title>
                    <MaxedContentsWrapper>
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

                        <div>
                            <div>
                                <div>작성된 글자</div>
                                <div>영원히</div>
                            </div>
                            <div>
                                <div>폰트 생성 정확도</div>
                                <div>78.9%</div>
                            </div>
                        </div>

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
