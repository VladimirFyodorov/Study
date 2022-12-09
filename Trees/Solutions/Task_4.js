import _ from 'lodash';
import {
  mkfile, mkdir, isFile, getChildren, getMeta, getName,
} from '@hexlet/immutable-fs-trees';
 
const downcaseFileNames = (tree) => {
	const name = getName(tree);
	const newMeta = _.cloneDeep(getMeta(tree));
	if (isFile(tree)) {
		const lowerCaseName = name.toLowerCase()
		return mkfile(lowerCaseName, newMeta);
	} 

	const newChildren = getChildren(tree).map(downcaseFileNames);
	return mkdir(name, newChildren, newMeta);
};


const tree = mkdir('/', [
  mkdir('eTc', [
    mkdir('NgiNx'),
    mkdir('CONSUL', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hOsts'),
]);
 
console.log(downcaseFileNames(tree));
// {
//   name: '/',
//   type: 'directory',
//   meta: {},
//   children: [
//     {
//       name: 'eTc',
//       type: 'directory',
//       meta: {},
//       children: [
//         {
//           name: 'NgiNx',
//           type: 'directory',
//           meta: {},
//           children: [],
//         },
//         {
//           name: 'CONSUL',
//           type: 'directory',
//           meta: {},
//           children: [{ name: 'config.json', type: 'file', meta: {} }],
//         },
//       ],
//     },
//     { name: 'hosts', type: 'file', meta: {}, },
//   ],
// }