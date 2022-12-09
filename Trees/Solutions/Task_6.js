import _ from 'lodash';
import { mkdir, mkfile, isFile, getMeta, getChildren, getName } from '@hexlet/immutable-fs-trees';

const calcSize = (tree) => {
	if (isFile(tree)) {
		return getMeta(tree).size;
	}

	return _.sum(getChildren(tree).map(calcSize));
}

const du = (tree) => {
	return getChildren(tree)
		.map(child => [getName(child), calcSize(child)])
		.sort((child1, child2) => Math.sign(child2[1] - child1[1]));
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
 
console.log(du(tree));
// [
//   ['etc', 10280],
//   ['hosts', 3500],
//   ['resolve', 1000],
// ]