import _ from 'lodash';
import {
  mkfile, mkdir, isFile, getChildren, getMeta, getName,
} from '@hexlet/immutable-fs-trees';


const compressImages = (tree) => {
	const isImage = (node) => isFile(node) && getName(node).endsWith('.jpg');
	const newMeta = _.cloneDeep(getMeta(tree));
	const newChildren = getChildren(tree).map(child => {
		if (isImage(child)) {
			const newMeta = _.cloneDeep(getMeta(child));
			newMeta.size = newMeta.size/2;
			return mkfile(getName(child), newMeta);
		}
		return child;
	})
	return mkdir(getName(tree), newChildren, newMeta);
};


const tree = mkdir('my documents', [
  mkfile('avatar.jpg', { size: 100 }),
  mkfile('passport.jpg', { size: 200 }),
  mkfile('family.jpg', { size: 150 }),
  mkfile('addresses', { size: 125 }),
  mkdir('presentations')
]);
 
const newTree = compressImages(tree);
// То же самое, что и tree, но во всех картинках размер уменьшен в два раза
console.log(newTree);
