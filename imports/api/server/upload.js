/**
 * 업로드 관련 API
 */

import AWS from 'aws-sdk';
import moment from 'moment';
import Future from 'fibers/future';
import Jimp from 'jimp';

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});
const bucketName = 'fontto';
const params = {
    Bucket: bucketName,
    ACL: 'public-read'
};
const environment = process.env.FONTTO_ENV;

Meteor.methods({
    uploadHandwriteToS3: function (fileBase64, label) {
        const f = new Future();
        let fileBuffer = new Buffer
        (fileBase64.replace(/^data:image\/\w+;base64,/, ""), 'base64');

        // 256 이미지 고정
        Jimp.read(fileBuffer).then(function (fileBuffer) {
            fileBuffer = fileBuffer.resize(128, 128).getBuffer(Jimp.MIME_JPEG,
                function (err, fileBuffer) {
                    const userEmail = Meteor.user().emails[0].address;
                    const userCount = Meteor.user().profile.count;
                    const folderName = environment + '/handwrites/'
                        + userEmail + '/' + userCount + '/';
                    const fileName = moment().format('YY-MM-DD-HH-mm-ss-SSS_' + label);

                    params.Key = folderName + fileName;
                    params.ContentType = 'image/jpeg';
                    params.Body = fileBuffer;

                    const putObjectPromise = s3.putObject(params).promise();
                    putObjectPromise.then(function (data) {
                        console.log(data);
                        return f.return(folderName + fileName);
                    }).catch(function (err) {
                        console.log(err);
                        return f.throw(err);
                    });

                });
        });

        return f.wait();
    }
});