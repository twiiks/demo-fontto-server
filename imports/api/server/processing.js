/**
 * 프로세싱 관련 api
 */
import Future from 'fibers/future';
import request from 'request';
import Jimp from 'jimp';

const environment = process.env.FONTTO_ENV;

Meteor.methods({
    // requestToProcessingServer: function (filePaths) {
    //     const f = new Future();
    //     for (let i in filePaths) {
    //         const filePath = 'https://s3.ap-northeast-2.amazonaws.com/fontto/' + filePaths[i];
    //         filePaths[i] = filePath;
    //     }
    //     const requestObj = {};
    //     requestObj.handwrites = filePaths;
    //     requestObj.email = Meteor.user().emails[0].address;
    //
    //     request({
    //         url: 'http://twiiks.co/fontto/processing',
    //         method: 'POST',
    //         json: requestObj
    //     }, function (err, response, body) {
    //         return f.return(body);
    //     });
    //
    //
    //     return f.wait();
    // },

    dumyRequestToProcessingServer: function (requests) {
        const response = requests.urls;
        console.log(response);
        return response;
    },

    requestToProcessingServer: function (requests) {
        const f = new Future();
        requests.env = environment;
        console.log(requests);
        request({
            url: 'http://52.78.114.28/fontto/processing',
            method: 'POST',
            json: requests
        }, function(err, response, body){
            return f.return(body);
        });

        return f.wait();
    },

    resizeImage: function (imageBuffer) {
        const f = new Future();
        imageBuffer = new Buffer
        (imageBuffer.replace(/^data:image\/\w+;base64,/, ""), 'base64');

        Jimp.read(imageBuffer, function (err, jimpImage) {
            jimpImage.resize(512, 512)
                .getBase64(Jimp.MIME_JPEG, function (err, result) {
                    return f.return(result);
                })
        });

        return f.wait();
    }
});

