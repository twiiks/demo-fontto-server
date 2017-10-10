import React, {Component} from 'react';
import styled from 'styled-components';

const DrawingCanvas = styled.canvas`
  border: 1px solid #444444;
`;

export class CanvasComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDrawing: false,
            lastX: 0,
            lastY: 0
        };
        this.draw = this.draw.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);

    }

    canvas() {
        return document.querySelector("#draw");
    }

    ctx() {
        return this.canvas().getContext("2d");
    }

    componentDidMount() {
        const canvas = this.canvas();
        const ctx = this.ctx();
        ctx.strokeStyle = '#222222';
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = 3;
    }

    onMouseDown(e) {
        this.setState({
            isDrawing: true,
            lastX: e.nativeEvent.offsetX,
            lastY: e.nativeEvent.offsetY
        })
    }

    draw(e) {
        const ctx = this.ctx();
        if (this.state.isDrawing) {
            ctx.beginPath();
            ctx.moveTo(this.state.lastX, this.state.lastY);
            ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
            ctx.stroke();
            this.setState({
                lastX: e.nativeEvent.offsetX,
                lastY: e.nativeEvent.offsetY
            });
        }
    }

    render() {
        return (
            <div>
                <DrawingCanvas id="draw"
                               width={this.props.width}
                               height={this.props.height}
                               onMouseMove={this.draw}
                               onMouseDown={this.onMouseDown}
                               onMouseUp={() => this.setState({isDrawing: false})}
                               onMouseOut={() => this.setState({isDrawing: false})}/>
            </div>
        );
    }
}
