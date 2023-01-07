import fsp from 'fs/promises'
const exchange = async (path1, path2) => {
  const [data1, data2] = await Promise.all([fsp.readFile(path1), fsp.readFile(path2)]);
  await Promise.all([fsp.writeFile(path1, data2), fsp.writeFile(path2, data1)]);
};

exchange('/Users/user/Desktop/Hexlet/Async/Solutions/myfile.txt',
  '/Users/user/Desktop/Hexlet/Async/Solutions/myfile copy.txt');
