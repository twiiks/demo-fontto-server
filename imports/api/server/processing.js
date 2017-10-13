/**
 * 프로세싱 관련 api
 */
import Future from 'fibers/future';
import request from 'request';

Meteor.methods({
    requestToProcessingServer: function (filePaths) {
        const f = new Future();
        for(let i in filePaths){
            const filePath = 'https://s3.ap-northeast-2.amazonaws.com/fontto/' + filePaths[i];
            filePaths[i] = filePath;
        }
        const requestObj = {};
        requestObj.handwrites = filePaths;
        requestObj.email = Meteor.user().emails[0].address;

        request({
            url: 'http://52.78.114.28/fontto/processing',
            method: 'POST',
            json: requestObj
        }, function(err, response, body){
            console.log(body);
            return f.return(body);
        });


        return f.wait();
    }
});