#!/usr/local/bin/casperjs --ssl-protocol=any

var casper = require('casper').create({
    viewportSize: {width: 1600, height: 3200},
//  verbose: true,
//  logLevel: "debug"
});
     
studentId = casper.cli.get('studentid');
password = casper.cli.get('password');
fullName = casper.cli.get('fullname');
file = casper.cli.get('file') ? casper.cli.get('file') : '/tmp/grades.png';
loginURL = casper.cli.get('url') ? casper.cli.get('url') : 'https://oakparkusd.vcoe.org/studentconnect/Default.aspx?id=OPUSD';

casper.start(loginURL, function() {
});

casper.then(function() {
    this.fillSelectors('form#loginform', {
        'input[name="Pin"]'      : studentId,
        'input[name="Password"]' : password,
    }, false);
    this.click('input[id="LoginButton"]');
});


casper.waitForText(fullName, function then() {
    //this.click('img[id="Img3"]');
    this.clickLabel(fullName);
});

casper.waitForText("Assignments", function then() {
    this.captureSelector(file, 'table[id="SP1_Assignments"]');
//  this.echo('snapshot taken');
});

casper.run(function() {
//    this.echo('... finished');        
    this.exit();
});

