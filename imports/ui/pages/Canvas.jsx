import React, {Component} from 'react';

import {Header} from '../components/Header';

import {BackgroundWhite} from "../styles/CommonStyle";
import {CanvasComponent} from "../components/CanvasComponent";
import {
    Title, SubDesc, String, C, CanvasWrapper, HandwriteSubmitButton,
    HandwriteSubmitButtonWrapper
} from "../styles/pages/CanvasStyle";

export class Canvas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
            currentChar: 0,
            string: [
                '누', '돌', '굶',
                '배', '셍', '잻',
                '취', '킝', '휅',]
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
        this.refs.canvasComponent.clearCanvas();

        if (!Meteor.user()) {
            alert('로그인 후에 이용해주세요!');
            this.props.history.push('/demo/email');
            return;
        }

        if (this.state.currentChar === this.state.string.length) {
            alert('마지막 글자입니다!');
            return;
        }
        const label = this.state.string[this.state.currentChar];

        Meteor.call('uploadHandwriteToS3', filebase64, label,
            function (err, res) {
                this.setState({currentChar: this.state.currentChar + 1});
            }.bind(this))

    }

    render() {
        let spanList = ['', '', '', '', '', '', '', '', ''];
        spanList[this.state.currentChar] = 'red';

        let canvasSize = this.state.height - 220;
        if (this.state.height - 220 > this.state.width - 20) {
            canvasSize = this.state.width - 20;
        }

        return (
            <div className="index">
                <BackgroundWhite>
                    <Header backLink='/demo/email'/>
                    <Title>폰트 만들기<SubDesc> 한글자씩 작성하고 버튼을 눌러주세요.</SubDesc></Title>
                    <String>
                        <C color={spanList[0]}>{this.state.string[0]}</C>
                        <C color={spanList[1]}>{this.state.string[1]}</C>
                        <C color={spanList[2]}>{this.state.string[2]}</C>
                        <C color={spanList[3]}>{this.state.string[3]}</C>
                        <C color={spanList[4]}>{this.state.string[4]}</C>
                        <C color={spanList[5]}>{this.state.string[5]}</C>
                        <C color={spanList[6]}>{this.state.string[6]}</C>
                        <C color={spanList[7]}>{this.state.string[7]}</C>
                        <C color={spanList[8]}>{this.state.string[8]}</C>
                    </String>

                    <CanvasWrapper>
                        <CanvasComponent width={canvasSize}
                                         height={canvasSize}
                                         ref='canvasComponent'/>
                    </CanvasWrapper>
                    <HandwriteSubmitButtonWrapper>
                        <HandwriteSubmitButton
                            label='다음 글자 작성하기'
                            onClick={this.onHandWriteSubmitButton}/>
                    </HandwriteSubmitButtonWrapper>
                </BackgroundWhite>
            </div>
        );
    }
}
