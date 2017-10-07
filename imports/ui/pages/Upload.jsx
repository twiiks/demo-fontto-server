import React, {Component} from 'react';

export class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            fileBase64: ''
        };
        this.onImageChanged = this.onImageChanged.bind(this);
        this.onImageSubmit = this.onImageSubmit.bind(this);
    }

    onImageChanged(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file,
                fileBase64: reader.result
            });
        };
        reader.readAsDataURL(file);
    }

    onImageSubmit(e) {
        e.preventDefault();
        Meteor.call('uploadToS3',
            this.state.file.type,
            this.state.fileBase64,
            function (err, ok) {
                if (err) {
                    alert('error!!');
                } else {
                    alert('uploaded!!');
                }
            });
    }

    render() {
        return (
            <div className="upload">
                <header>
                    <h1>Upload Demo</h1>
                </header>
                <form>
                    <input type="file" accept="image/*"
                           onChange={this.onImageChanged}/>
                    <button type="submit"
                            onClick={this.onImageSubmit}>Upload
                    </button>
                </form>

            </div>
        );
    }
}
