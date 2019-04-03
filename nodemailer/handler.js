var CONTACT_ADDRESS = 'enquiries@ocius.com.au';
var querystring = require('querystring');
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
      "fullName": {"type":"string"},
      "position": {"type":"string"},
      "company": {"type":"string"},
      "email": {"type":"string", "format": "email"},
      "phone": {"type":"string"},
      "interest": {"type":"string"},
    },
    "additionalProperties": false,
    "required": ["fullName", "email", "interest"]
  });

  console.log(JSON.stringify(event));
  // Parse event JSON
  var body = querystring.parse(event.body);
  const { fullName, position, company, email, phone, interest } = body;

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };

  validate(body)
    .then(valid => {
      // Email Template
      const output = `
        <p>You have a message</p>
        <h3>Contact Details</h3>
        <p>Full name: ${fullName}</p>
        <p>Position: ${position}</p>
        <p>Company: ${company}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <h3>Message</h3>
        <p>${interest}</p>
        `;

      mailer.sendMail({
        from: `${fullName} <${email}>`,
        to: [CONTACT_ADDRESS],
        subject: '[BlueBottle USV Brochure Enquiry]',
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