import { URL } from 'url';

const modifyURL = (address, params = {}) => {
  const uri = new URL(address);
  Object.entries(params).forEach(([name, value]) => {
    if (value === null) {
      uri.searchParams.delete(name);
    } else {
      uri.searchParams.set(name, value);
    }
  });

  return uri.toString();
};

const address = 'https://amazon.com/search?page=10&per=5';
const params = { page: 100, per: null, order: 'desc', hidden: false };
const newAddress = modifyURL(address, params);
console.log(newAddress); //'https://amazon.com/search?page=100&order=desc&hidden=false'
