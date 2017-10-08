import React, {Component} from 'react';

import AppBar from 'material-ui/AppBar';
class HeaderWrapper extends Component {
    render() {
        return (
            <AppBar title={this.props.title}
                    iconElementLeft={this.props.iconElementLeft}
                    style={{backgroundColor: '#333333'}}
            />
        )
    }
}

export {
    HeaderWrapper
};