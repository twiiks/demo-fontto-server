import {Meteor} from 'meteor/meteor';
import React from 'react';
import {render} from 'react-dom';

import {Route, BrowserRouter, Switch} from 'react-router-dom';

// Base Layout
import {App} from '../../ui/layouts/App'

// Pages
import {Index} from '../../ui/pages/Index';
import {Upload} from '../../ui/pages/Upload';

// Authentication
// const authenticate = (nextState, replace) => {
//     if (!Meteor.loggingIn() && !Meteor.userId()) {
//         replace({
//             pathname: '/login',
//             state: {nextPathname: nextState.location.pathname},
//         });
//     }
// };

Meteor.startup(() => {
    render(
        <BrowserRouter>
            <App>
                <Switch>
                    <Route exact path="/demo" component={Index}/>
                    <Route path="/demo/upload" component={Upload}/>
                </Switch>
            </App>
        </BrowserRouter>,
        document.getElementById('react-root'),
    );
});
