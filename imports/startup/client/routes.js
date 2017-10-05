import {Meteor} from 'meteor/meteor';
import React from 'react';
import {render} from 'react-dom';

import {Route, BrowserRouter} from 'react-router-dom';

// Base Layout
import {App} from '../../ui/layouts/App'

// Pages
import {Index} from '../../ui/pages/Index'

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
                <Route path="/demo" component={Index}/>
            </App>
        </BrowserRouter>,
        document.getElementById('react-root'),
    );
});
