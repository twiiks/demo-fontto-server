/**
 * 업로드 관련 API
 */

import AWS from 'aws-sdk';
import moment from 'moment';
import Future from 'fibers/future';

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});
const bucketName = 'fontto';
const params = {
    Bucket: bucketName,
    ACL: 'public-read'
};

Meteor.methods({
    uploadToS3: function (fileType, fileBase64) {

        const f = new Future();
        let fileBuffer = new Buffer
        (fileBase64.replace(/^data:image\/\w+;base64,/, ""), 'base64');

        let folderName = moment().format('YYYY-MM');
        let fileName = moment().format('DD-HH-mm-ss-SSS');

        params.Key = 'images/' + folderName + '/' + fileName;
        params.ContentType = fileType;
        params.Body = fileBuffer;

        const putObjectPromise = s3.putObject(params).promise();
        putObjectPromise.then(function (data) {
            console.log(data);
            console.log('success');
            return f.return('SUCCESS');
        }).catch(function (err) {
            console.log(err);
            return f.throw(err);
        });

        return f.wait();
    }
});