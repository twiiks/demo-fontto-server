import React, {Component} from 'react';

import {Header} from '../components/Header';
import {Loading} from '../components/Loading';

import {BackgroundWhite} from "../styles/CommonStyle";
import {CanvasComponent} from "../components/CanvasComponent";
import {
    Title, SubDesc, ToWriteFont, ToWriteFontWrapper, ToWriteFontDesc,
    C, MaxedContentsWrapper, DescWrapper, InformationTitle,
    CanvasWrapper, InfomationWrapper,
    InformationContent, NextFontButton, SubmitFontButton,
    PercentInfoWrapper, Percent
} from "../styles/pages/CanvasStyle";

const environment = process.env.FONTTO_ENV;

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
            imageUrlsWithUnicode: {},
            interval: 0,
            currentPercentGoal: 0,
            fontCoverage: 0
        };
        this.updateWindowDimensions =
            this.updateWindowDimensions.bind(this);

        Meteor.loginWithPassword('fontto@twiiks.co', 'fontto'); // 페이지 들어가면 로그인
        Meteor.call('updateCount');
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);

        this.refs.canvas.addEventListener('touchmove', function (e) {
            e.preventDefault();
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    addProcess(percent) {

        const time = Math.floor(Math.random() * 150) + 50;

        this.setState({
            interval: setInterval(function () {
                this.setState({
                    currentPercent: this.state.currentPercent + 1,
                    fontCoverage: parseInt(this.state.currentPercent / 100 * 323)
                })
            }.bind(this), time),
            currentPercentGoal: percent
        })

    }

    toUnicode(str) {
        return str.split('').map(function (value, index, array) {
            var temp = value.charCodeAt(0).toString(16).toUpperCase();
            if (temp.length > 2) {
                return '0x' + temp;
            }
            return value;
        }).join('');
    }

    onNextFontButton() {
        let imageBuffer = this.refs.canvasComponent.getCanvasBuffer();

        const label = this.state.toWriteFonts[this.state.currentChar];

        this.setState({
            loading: true,
            currentJob: '\'' + label + '\' 분석 중...!'
        });
        const addGoal = Math.floor(Math.random() * 10) + 10;
        this.addProcess(this.state.currentPercentGoal + addGoal);

        const unicodeLabel = this.toUnicode(label).toLowerCase();

        Meteor.call('resizeImage', imageBuffer, function (err, resizedBuffer) {
            this.setState({
                currentJob: '\'' + label + '\' 업로드 중...!',
            });

            Meteor.call('uploadHandwriteToS3', resizedBuffer, label,
                function (err, res) {
                    this.refs.canvasComponent.clearCanvas();
                    const appendUrlWithUnicode = this.state.imageUrlsWithUnicode;
                    appendUrlWithUnicode[unicodeLabel] = res;
                    this.setState({
                        currentJob: '\'' + label + '\' 분석 완료 !',
                        writtenFonts: this.state.writtenFonts + label,
                        currentChar: this.state.currentChar + 1,
                        loading: false,
                        imageUrlsWithUnicode: appendUrlWithUnicode
                    });
                }.bind(this));
        }.bind(this));
    }

    onSubmitFontButton() {

        this.props.history.push({
            pathname: '/demo/end',
            state: {
                urls: this.state.imageUrlsWithUnicode,
                count: Meteor.user().profile.count,
                env: environment
            }
        });
    }


    render() {
        // 퍼센트에 따라 결정
        let submitButtonDisabled = true;
        let nextButtonDisabled = false;

        if (this.state.currentPercent !== this.state.currentPercentGoal) {
            nextButtonDisabled = true;
        }

        if (this.state.currentPercent === this.state.currentPercentGoal) {
            clearInterval(this.state.interval);
        } else if (this.state.currentPercent >= 100) {
            clearInterval(this.state.interval);
            submitButtonDisabled = false;
        }

        if (this.state.currentPercent > 70) {
            submitButtonDisabled = false;
        }

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
        let informationSize = this.state.height - canvasSize - 220;

        // 퍼센트 폰트 사이즈 결정
        let percentFontSize = canvasSize / 2.5;


        // 현재 작업 변경
        let currentJob = '';
        if (this.state.currentJob === '') {
            currentJob = '진행중인 작업이 없습니다.'
        } else {
            currentJob = this.state.currentJob;
        }

        // 작성된 글자 변경
        let writtenFonts = '';
        if (this.state.writtenFonts === '') {
            writtenFonts = '글자를 작성해보세요!';
        } else {
            writtenFonts = this.state.writtenFonts;
        }

        // submit label
        let submitLabel = '';
        if (this.state.currentJob === '') {
            submitLabel = '70% 이상 시 글자 생성이 가능합니다.'
        } else if (this.state.currentPercent < 70) {
            submitLabel = this.state.currentJob;
        } else {
            submitLabel = '글자 생성하기'
        }

        return (
            <div className="canvas" ref='canvas'>
                <BackgroundWhite>
                    <Header backLink='/'/>
                    <Loading on={this.state.loading}/>
                    <Title>폰트 만들기<SubDesc> 한글자씩 작성하고 버튼을 눌러주세요.</SubDesc></Title>
                    <MaxedContentsWrapper maxWidth={this.state.maxWidth}>
                        <DescWrapper>
                            <ToWriteFontDesc>
                                {toWriteSpanList}
                            </ToWriteFontDesc>
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

                        <InfomationWrapper height={informationSize}>
                            <PercentInfoWrapper>
                                <Percent fontSize={percentFontSize}>
                                    {this.state.currentPercent}%
                                </Percent>
                            </PercentInfoWrapper>
                            <div>
                                <InformationTitle>
                                    글자 생성 가능
                                </InformationTitle>
                                <InformationContent>
                                    최빈출 : {this.state.fontCoverage} / 323
                                </InformationContent>
                            </div>
                            <div style={{marginTop: 10}}>
                                <InformationTitle>
                                    작성된 글자
                                </InformationTitle>
                                <InformationContent>
                                    {writtenFonts}
                                </InformationContent>
                            </div>

                            <NextFontButton
                                disabled={nextButtonDisabled}
                                onClick={this.onNextFontButton.bind(this)}/>

                            <SubmitFontButton
                                label={submitLabel}
                                disabled={submitButtonDisabled}
                                onClick={this.onSubmitFontButton.bind(this)}
                            />
                        </InfomationWrapper>
                    </MaxedContentsWrapper>
                </BackgroundWhite>
            </div>
        );
    }
}
