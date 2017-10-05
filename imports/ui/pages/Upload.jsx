import React, {Component} from 'react';

export class Upload extends Component {
    render() {
        return (
            <div className="upload">
                <header>
                    <h1>Upload Demo</h1>
                </header>
                <input type="file" accept="image/*" capture="camera" />

            </div>
        );
    }
}
