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
            currentChar: 0
        };
        this.updateWindowDimensions =
            this.updateWindowDimensions.bind(this);
        this.onHandWriteSubmitButton =
            this.onHandWriteSubmitButton.bind(this);

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
        this.refs.canvasComponent.clearCanvas();
        if (this.state.currentChar === 8) {
            alert('마지막 글자입니다!');
            return;
        }
        this.setState({currentChar: this.state.currentChar + 1});
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
                        <C color={spanList[0]}>누</C>
                        <C color={spanList[1]}>돌</C>
                        <C color={spanList[2]}>굶</C>
                        <C color={spanList[3]}>배</C>
                        <C color={spanList[4]}>셍</C>
                        <C color={spanList[5]}>잻</C>
                        <C color={spanList[6]}>취</C>
                        <C color={spanList[7]}>킝</C>
                        <C color={spanList[8]}>휅</C>
                    </String>

                    <CanvasWrapper>
                        <CanvasComponent width={canvasSize}
                                         height={canvasSize}
                                         ref='canvasComponent'/>
                    </CanvasWrapper>
                    <HandwriteSubmitButtonWrapper>
                        <HandwriteSubmitButton
                            label='다음 글자 작성하기'
                            onTouchEnd={this.onHandWriteSubmitButton}
                            onClick={this.onHandWriteSubmitButton}/>
                    </HandwriteSubmitButtonWrapper>
                </BackgroundWhite>
            </div>
        );
    }
}
