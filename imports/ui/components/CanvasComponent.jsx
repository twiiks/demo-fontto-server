import React, {Component} from 'react';
import styled from 'styled-components';

const DrawingCanvas = styled.canvas`
  border: 1px solid #444444;
  background-color: #ffffff;
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
        ctx.lineWidth = 12;
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
            if (e.touches) {
                // console.log(e.touches[0].clientX);
                // console.log(e.touches[0].clientY);
                const offset = e.target.getBoundingClientRect();
                const pointX = e.touches[0].clientX - offset.x;
                const pointY = e.touches[0].clientY - offset.y;
                ctx.lineTo(pointX, pointY);
                ctx.stroke();
                this.setState({
                    lastX: pointX,
                    lastY: pointY
                });
            } else {
                ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
                ctx.stroke();
                this.setState({
                    lastX: e.nativeEvent.offsetX,
                    lastY: e.nativeEvent.offsetY
                });
            }


        }
    }

    clearCanvas() {
        this.ctx().clearRect(0, 0, this.canvas().width,
            this.canvas().height);
    }

    render() {
        return (
            <div>
                <DrawingCanvas id='draw' ref='drawingCanvas'
                               width={this.props.width}
                               height={this.props.height}

                               onTouchStart={this.onMouseDown}
                               onTouchMove={this.draw}
                               onTouchEnd={() => this.setState({isDrawing: false})}

                               onMouseMove={this.draw}
                               onMouseDown={this.onMouseDown}
                               onMouseUp={() => this.setState({isDrawing: false})}
                               onMouseOut={() => this.setState({isDrawing: false})}/>
            </div>
        );
    }
}

