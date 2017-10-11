// import React, {Component} from 'react';
//
// import {Header} from '../components/Header';
// import {Loading} from '../components/Loading';
//
// export class Upload extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             loading: false,
//             file: '',
//             fileBase64: ''
//         };
//         this.onImageChanged = this.onImageChanged.bind(this);
//         this.onImageSubmit = this.onImageSubmit.bind(this);
//     }
//
//     onImageChanged(e) {
//         e.preventDefault();
//         let reader = new FileReader();
//         let file = e.target.files[0];
//         reader.onloadend = () => {
//             this.setState({
//                 file: file,
//                 fileBase64: reader.result
//             });
//         };
//         reader.readAsDataURL(file);
//     }
//
//     onImageSubmit(e) {
//         e.preventDefault();
//         if(this.state.file === ''){
//             alert('파일을 선택해주세요!');
//             return;
//         }
//         this.setState({loading: true});
//         Meteor.call('uploadFileToS3',
//             this.state.file.type,
//             this.state.fileBase64,
//             function (error, result) {
//                 if (error) {
//                     this.setState({loading: false});
//                     alert('error!!');
//                 } else {
//                     this.setState({loading: false});
//                     alert('uploaded!!');
//                 }
//             }.bind(this));
//     }
//
//     render() {
//         return (
//             <div className="upload">
//                 <Header/>
//                 <Loading on={this.state.loading}/>
//                 <header>
//                     <h1>Upload Demo</h1>
//                 </header>
//                 <form>
//                     <input type="file" accept="image/*"
//                            onChange={this.onImageChanged}/>
//                     <button type="submit"
//                             onClick={this.onImageSubmit}>Upload
//                     </button>
//                 </form>
//
//             </div>
//         );
//     }
// }
