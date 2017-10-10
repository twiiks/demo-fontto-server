import React, {Component} from 'react';
import {HeaderWrapper} from '../styles/components/HeaderStyle';
import {Link} from 'react-router-dom';

import IconButton from 'material-ui/IconButton';
import NavigationBack from 'material-ui/svg-icons/hardware/keyboard-arrow-left';

export class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HeaderWrapper
                title="fontto demo"
                iconElementLeft={
                    <IconButton>
                        <Link to={this.props.backLink}>
                            <NavigationBack color='#f5f5f5'/>
                        </Link>
                    </IconButton>}
            />
        );
    }
}

