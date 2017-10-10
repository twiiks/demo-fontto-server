import React, {Component} from 'react';

import {Header} from '../components/Header';

import {BackgroundWhite} from "../styles/CommonStyle";

export class Canvas extends Component {
    constructor(props){
        super(props);
    }

    render() {

        console.log(Meteor.userId());
        return (
            <div className="index">
                <BackgroundWhite>
                    <Header backLink='/demo/email'/>
                </BackgroundWhite>
            </div>
        );
    }
}
