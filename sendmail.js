#!/usr/local/bin/node
var nodemailer = require('nodemailer');
var moment = require('moment');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'somebody@gmail.com',
        pass: ''
    }
});
var todaysDate = moment().format('MMMM Do YYYY');
transporter.sendMail({
    from: 'somebody@gmail.com',
    to: ['somebody@gmail.com', 'somebodyelse@gmail.com'],
    subject: 'Somebody\'s Grades - ' + todaysDate,
    attachments: [{
        filename: '/tmp/grades.png',
        path: '/tmp/grades.png'
    }],
});
