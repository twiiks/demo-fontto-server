import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

Meteor.methods({

    resister: function (email) {
        if (!validateEmail(email)) {
            return false;
        }
        Accounts.createUser({
            email: 'fontto@twiiks.co',
            password: 'fontto',
            profile: {
                count: 0
            }
        });
    },

    updateCount: function () {
        Meteor.users.update({_id: Meteor.userId()},
            {$inc: {'profile.count': 1}})
    }
});