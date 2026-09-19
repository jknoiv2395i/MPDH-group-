const https = require('https');

function check(url) {
  https.get(url, (res) => {
    console.log(url, '=> Status:', res.statusCode, 'Content-Type:', res.headers['content-type']);
  }).on('error', console.error);
}

check('https://mphdgroup.com/assets/index-CEAAItLJ.js');
check('https://mphdgroup.com/assets/index-BwrqVxEd.css');
check('https://mphdgroup.com/api/properties');
