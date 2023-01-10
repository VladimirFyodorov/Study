// @ts-check

import http from 'http';
import { URL } from 'url';
import querystring from 'querystring';

const getSearch = (queryParams, params) => {
  const mergedQuery = { ...queryParams, ...params };
  const keys = Object.keys(mergedQuery);
  const newQueryParams = keys
    .filter((key) => mergedQuery[key] !== null && mergedQuery[key] !== undefined)
    .reduce((acc, key) => ({ ...acc, [key]: mergedQuery[key] }), {});

  return keys.length > 0 ? `?${querystring.stringify(newQueryParams)}` : '';
};

const dispatcher = ({ method, data, url, params, headers }) => {
  console.log('Started dispatcher: method: ', method, ' data: ', data, ' url: ', url, ' headers: ', headers);
  const parsedURL = new URL(url);
  const postData = querystring.stringify(data || '');
  const config = {
    hostname: parsedURL.hostname,
    port: parsedURL.port,
    path: parsedURL.pathname,
    searchParams: getSearch(parsedURL.searchParams, params),
    method,
    headers
  };
  const getMyResponse = (res) => ({
    status: res.statusCode,
    statusText: res.statusMessage,
    headers: res.getHeaders(),
    data: '',
  });
  if (method === 'GET') {
    return new Promise((resolve, reject) => {
      console.log('Started promise, config: ', config);
      try {
        http.request(config, res => {
          console.log('request start');
          const data = [];
          res.on('data', (chunk) => {
            data.push(chunk.toString());
            console.log('request data');
          }).on('end', () => {
            console.log('request end');
            const myResponse = getMyResponse(res);
            myResponse.data = data.join('');
            console.log('request end: ', myResponse);
            resolve(myResponse);
          })
        });
      } catch (err) {
        console.log('catched error: ', err);
        reject(err);
      }
    })
  }

  if (method === 'POST') {
    config['headers'] = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData),
      ...config['headers']
    }
    return new Promise((resolve, reject) => {
      console.log('Started promise, config: ', config);
      try {
        const req = http.request(config, res => {
          const data = [];
          res.on('data', (chunk) => {
            data.push(chunk.toString());
          }).on('end', () => {
            const myResponse = getMyResponse(res);
            myResponse.data = data.join('');
            console.log('request end: ', myResponse);
            resolve(myResponse);
          })
        });
        req.write(postData);
        req.end();
      } catch (err) {
        console.log('catched error: ', err);
        reject(err);
      }
    })
  }
};

const myurl = 'url';
const myconfig = { header: 'header'}
const obj = { ...myconfig, url: myurl, method: 'GET' };
const { url, method, ...config } = obj;
console.log(url);
console.log(method);
console.log(config);