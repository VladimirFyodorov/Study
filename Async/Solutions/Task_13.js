import { URL } from 'url';
import axios from 'axios';

const extractLinks = (content) => {
  const host = 'http://localhost:8080';
  const linkRx = /href="(.+?)"/ig;
  const results = content.matchAll(linkRx);
  return Array.from(results).map((r) => r[1])
    .map((rawLink) => new URL(rawLink, host).toString());
};

const getBadLinks = async (url) => {
  const response = await axios.get(url);
  const links = extractLinks(response.data);
  const promises = links.map((link) => {
    return axios.get(link)
      .then(() => '')
      .catch(() => link);
  });
  const resLinks = await Promise.all(promises);
  return resLinks.filter((link) => link !== '');;
};

const url = 'https://privet.hexlet';
const links = await getBadLinks(url);
console.log(links);
// Гипотетический пример:
// [
//   'https://privet.hexlet/somepage',
//   'https://privet.hexlet/another/page',
// ]
