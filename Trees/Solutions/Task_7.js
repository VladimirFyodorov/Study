import { mkdir, mkfile, isFile, getChildren, getName } from '@hexlet/immutable-fs-trees';

const findFilesByName = (tree, subString = '', path = '') => {
	if (isFile(tree)) {
		return getName(tree).includes(subString) ? path : '';
	}

	return getChildren(tree)
		.flatMap(child => findFilesByName(child, subString, `${path}/${getName(child)}`))
		.filter(el => el !== '');
}
 
const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf', { size: 800 }),
    ]),
    mkdir('consul', [
      mkfile('config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);
 
console.log(findFilesByName(tree, 'co'));
// ['/etc/nginx/nginx.conf', '/etc/consul/config.json']