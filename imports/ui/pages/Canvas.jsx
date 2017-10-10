import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {Header} from '../components/Header';

export class Canvas extends Component {
    render() {
        return (
            <div className="index">
                <Header backLink='/demo/email'/>
            </div>
        );
    }
}
