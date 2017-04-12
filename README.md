This is a script to grab student grades from the QConnect website (an outsourced grades management site for school districts) and render an image of the site suitable for quick'n'dirty embedding in an email.   

You'll need your student's username and password for it to work, of course.  The site is all private.

Sample invocation of the `grades.js` script:
```grades.js --studentid='1234567' --password='PASSWORD' --fullname='Richard M Nixon' --file='/tmp/richard.png'```

 If you want a mail to be sent, you can use the `sendmail.js` script to send it via a GMail account.  You'll need to fill in the appropriate variables.  Sorry those things aren't parameterized but I don't actually expect ANYONE ELSE to EVER use this.

It's powered by CasperJS, so you'll need that installed to run it.
