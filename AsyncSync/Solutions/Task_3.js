import http from 'http';
import { URL } from 'url';
import querystring from 'querystring';

const getToken = (body) => body.match(/value="(\w+)"/)[1];

const CSRFregistration = (registrationFormUrl, submitFormUrl, nickname, callback) => {
  http.get(registrationFormUrl, res => {
    const data = [];
    res.on('data', (buf) => {
      data.push(buf.toString());
    }).on('end', () => {
      if (res.statusCode !== 200) {
        callback(new Error('Status is not 200!!'))
        return;
      }
      try {
        const parsedURL = new URL(submitFormUrl);
        const token = getToken(data.join(''));
        const postData = querystring.stringify({ nickname, token });
        const options = {
          hostname: parsedURL.hostname,
          port: parsedURL.port,
          path: parsedURL.pathname,
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postData),
          }
        };
        const req = http.request(options, (res) => {
          if (res.statusCode !== 302) {
            callback(new Error('Status is not 302'));
          } else {
            callback(null);
          }
        });
        req.write(postData);
        req.end();
      } catch (err) {
        callback(err);
      }
    })

    res.on('error', callback);
  });
};
