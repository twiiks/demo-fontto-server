import {Meteor} from 'meteor/meteor';
import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {Route, BrowserRouter, Switch} from 'react-router-dom';

// Base Layout
import {App} from '../../ui/layouts/App'

// Pages
import {Index} from '../../ui/pages/Index';
import {Upload} from '../../ui/pages/Upload';
import {Email} from '../../ui/pages/Email';
import {Canvas} from '../../ui/pages/Canvas';
import {DemoEnd} from '../../ui/pages/DemoEnd';

Meteor.startup(() => {
    injectTapEventPlugin();
    render(
        <BrowserRouter>
            <MuiThemeProvider>
                <App>
                    <Route exact path="/" component={Index}/>
                    <Switch>
                        <Route exact path="/demo" component={Index}/>
                        <Route exact path="/demo/email" component={Email}/>
                        <Route exact path="/demo/canvas" component={Canvas}/>
                        <Route path="/demo/end" component={DemoEnd}/>
                    </Switch>
                </App>
            </MuiThemeProvider>
        </BrowserRouter>,
        document.getElementById('react-root'),
    );
});
