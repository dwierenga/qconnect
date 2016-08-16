This is a script to grab student grades from the QConnect website (an outsourced grades management site for school districts) and render an image of the site suitable for quick'n'dirty embedding in an email.   

You'll need your student's username and password for it to work, of course.  The site is all private.

There are a few places in the code you'll have to find to enter the username and password for QConnect, and if you want a mail to be sent, you can use the `sendmail.js` script to send it via a GMail account.  You'll need to fill that in too, of course.  Sorry those things aren't parameterized but I don't actually expect ANYONE ELSE to EVER use this.

It's powered by CasperJS, so you'll need that installed to run it.
