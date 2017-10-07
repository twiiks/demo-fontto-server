/**
 * 업로드 관련 API
 */

import AWS from 'aws-sdk';
import moment from 'moment';

const s3 = new AWS.S3();
const bucketName = 'fontto';
const params = {
    Bucket: bucketName,
    ACL:'public-read'
};

Meteor.methods({

    'uploadToS3': function (fileType, fileBase64) {

        let fileBuffer = new Buffer
        (fileBase64.replace(/^data:image\/\w+;base64,/, ""), 'base64');

        let folderName = moment().format('YYYY-MM');
        let fileName = moment().format('DD-HH-mm-ss-SSS');

        params.Key = 'images/' + folderName + '/' + fileName;
        params.ContentType = fileType;
        params.Body = fileBuffer;

        const putObjectPromise = s3.putObject(params).promise();
        putObjectPromise.then(function(data){
            console.log(data);
            console.log('success');
            return 'OK'
        }).catch(function(err){
            console.log(err);
            throw err;
        })

    }
});