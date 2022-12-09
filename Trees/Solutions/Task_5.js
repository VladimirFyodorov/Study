import { mkdir, mkfile, isFile, getName, getChildren } from '@hexlet/immutable-fs-trees';
import _ from 'lodash';

const getHiddenFilesCount = (tree) => {
	const isHiddenFile = (tree) => getName(tree).charAt(0) === '.';
	if (isFile(tree)) {
		return isHiddenFile(tree) ? 1 : 0;
	}

	const hiddenCountsLst = getChildren(tree).map(getHiddenFilesCount);
	return _.sum(hiddenCountsLst);
};

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('.nginx.conf', { size: 800 }),
    ]),
    mkdir('.consul', [
      mkfile('.config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('.hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);
 
console.log(getHiddenFilesCount(tree)); // 3
