#!/usr/local/bin/casperjs 
var casper = require('casper').create({
    viewportSize: {width: 1600, height: 3200}
});
     
casper.start('https://oakparkusd.vcoe.org/studentconnect/Default.aspx?id=OPUSD', function() {
});

casper.then(function() {
    this.fillSelectors('form#loginform', {
        'input[name="Pin"]'      : 'FILL_ME_IN',
        'input[name="Password"]' : 'I_AM_A_FAKE_PASSWORD',
    }, false);
    this.click('input[id="LoginButton"]');
});


casper.waitForText("Firstname Lastname", function then() {
    this.click('img[id="Img3"]');
});

casper.waitForText("Assignments", function then() {
    this.captureSelector('/tmp/grades.png', 'table[id="SP1_Assignments"]');
//  this.echo('snapshot taken');
});

casper.run(function() {
//    this.echo('... finished');        
    this.exit();
});

