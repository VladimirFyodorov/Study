const getDomainInfo = (url) => {
  return {
    scheme: (url.split('://')[1]) ? url.split('://')[0] : 'http',
    name: url.split('://')[1] || url.split('://')[0]
  };
};

console.log(getDomainInfo('https://hexlet.io'));
console.log(getDomainInfo('vfyodorov.ru'));
// => { scheme: 'https', name: 'hexlet.io' }