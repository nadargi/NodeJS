var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ajay.nadargi@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'ajay.nadargi@gmail.com',
  to: 'nadargi.ajay@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
