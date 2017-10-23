import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

export const UserImages = new Mongo.Collection('userImages');

Meteor.methods({
    addUserImage: function (url, unicode) {
        UserImages.insert({
            url,
            unicode,
            createdAt: new Date()
        })
    },

    getAllUserImages: function(){
        return UserImages.find({}).fetch();
    }
});