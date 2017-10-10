import React, {Component} from 'react';

import {Header} from '../components/Header';

import {BackgroundWhite} from "../styles/CommonStyle";
import {CanvasComponent} from "../components/CanvasComponent";
import {
    Title, String, C, CanvasWrapper, HandwriteSubmitButton,
    HandwriteSubmitButtonWrapper
} from "../styles/pages/CanvasStyle";

export class Canvas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0
        };
        this.updateWindowDimensions =
            this.updateWindowDimensions.bind(this);

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

    render() {
        return (
            <div className="index">
                <BackgroundWhite>
                    <Header backLink='/demo/email'/>
                    <Title>폰트 만들기</Title>
                    <String>
                        <C>누</C><C>돌</C><C>굶</C>
                        <C>배</C><C>셍</C><C>잻</C>
                        <C>취</C><C>킝</C><C>휅</C>
                    </String>

                    <CanvasWrapper>
                        <CanvasComponent width={this.state.width - 20}
                                         height={this.state.height - 210}/>
                    </CanvasWrapper>
                    <HandwriteSubmitButtonWrapper>
                        <HandwriteSubmitButton label='다음 글자 작성하기'/>
                    </HandwriteSubmitButtonWrapper>
                </BackgroundWhite>
            </div>
        );
    }
}
