var CONTACT_ADDRESS = 'contact@ocius.com.au';
const AJV = require('ajv');

var mailer = require('nodemailer').createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSWORD,
  }
});

module.exports.contact = (event, context, callback) => {

  const ajv = new AJV();

  const validate = ajv.compile({
    "$async": true,
    "properties": {
      "name": {"type":"string"},
      "company": {"type":"string"},
      "email": {"type":"string", "format": "email"},
      "message": {"type":"string"},
    },
    "additionalProperties": false,
    "required": ["name", "email", "message"]
  });

  console.log(JSON.stringify(event));
  const body = JSON.parse(event.body);
  const { name, company, email, message } = body;

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };

  validate(JSON.stringify(event))
    .then(valid => {
      // Email Template
      const output = `
        <p>You have a message</p>
        <h3>Contact Details</h3>
        <p>Name: ${name}</p>
        <p>Company: ${company}</p>
        <p>Email: ${email}</p>
        <h3>Message</h3>
        <p>${message}</p>
        `;

      mailer.sendMail({
        from: `${name} <${email}>`,
        to: [CONTACT_ADDRESS],
        subject: '[Contact Us Form Submission]',
        html: output,
      }, function(err, info) {
        if (err) return callback(err);
        callback(null, {
          statusCode: 200,
          body: "Success!",
          headers
        });
      });
    })
    .catch(error => {
      if (error) {
        console.log(error.errors);
        callback(null, {
          statusCode: 502,
          body: error.errors[0].message,
          headers
        })
      }
    });
};