import https from 'https';

function check(url) {
  https.get(url, (res) => {
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
      console.log(url, '=> Status:', res.statusCode, 'Content-Type:', res.headers['content-type'], 'Length:', body.length);
    });
  }).on('error', console.error);
}

check('https://mphdgroup.com/assets/index-CEAAItLJ.js');
check('https://mphdgroup.com/assets/index-BwrqVxEd.css');
check('https://mphdgroup.com/api/properties');
