import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Index extends Component {
    render() {
        return (
            <div className="index">
                <header>
                    <h1>fontto 데모</h1>
                </header>

                <ul>
                    <li><Link to={'/demo/upload'}>
                        폰트 만들어보러 가기
                    </Link></li>
                </ul>
            </div>
        );
    }
}
