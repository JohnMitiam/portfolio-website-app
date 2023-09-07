const { google } = require('AIzaSyALM5U8Q6hnk5KLz3UT9a5tUEpdLxI09to');
const OAuth2 = google.auth.OAuth2;

const credentials = require('./src/GmailAPI.json');

const oauth2Client = new OAuth2(
  credentials.web.client_id,
  credentials.web.client_secret,
  credentials.web.redirect_uris[0]
);

oauth2Client.setCredentials({
  access_token:
    '488768776323-3a799r4au91h9v895g3ou7verl7h92ar.apps.googleusercontent.com',
  refresh_token:
    '488768776323-3a799r4au91h9v895g3ou7verl7h92ar.apps.googleusercontent.com',
});

const gmail = google.gmail({
  version: 'v1',
  auth: oauth2Client,
});

gmail.users.messages.send(
  {
    userId: 'me',
    requestBody: {
      raw: 'johnjohnmitiam14@gmail.com',
    },
  },
  (err, response) => {
    if (err) {
      console.error('Error sending email:', err);
    } else {
      console.log('Email sent successfully:', response.data);
    }
  }
);
