'use strict';

var config = require('../config');
var sendgrid = require('sendgrid')(config.sendGridKey);

exports.send = async (to, subject, body) =>{
    sendgrid. send({
        to: to,
        from: 'gztavo.rosa@gmail.com',
        subject: subject,
        html: body
    });
}