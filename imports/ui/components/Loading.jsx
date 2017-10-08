import React, {Component} from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -25px;
    margin-top: -25px;
    width: 50px;
    height: 50px;
    visibility: ${(props) => props.display};
`;

export class Loading extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let display = 'hidden';
        if(this.props.on === true){
            display = 'visible'
        }
        return (
            <LoadingWrapper display={display}>
                <ReactLoading type='spin' color='#000' height='50' width='50'/>
            </LoadingWrapper>
        );
    }
}
