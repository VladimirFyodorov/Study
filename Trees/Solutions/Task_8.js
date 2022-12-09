import _ from 'lodash';

const changeClass = (tree, oldClass, newClass) => {
	const iter = (tree) => {
		const newTree = _.cloneDeep(tree);
		newTree.className = (newTree.className === oldClass) ? newClass : newTree.className;

		if (newTree.children) {
			newTree.children = newTree.children.map(iter);
		}
		return newTree;
	};

	return iter(tree);
};

const tree = {
  name: 'div',
  type: 'tag-internal',
  className: 'hexlet-community',
  children: [
    {
      name: 'div',
      type: 'tag-internal',
      className: 'old-class',
      children: [],
    },
    {
      name: 'div',
      type: 'tag-internal',
      className: 'old-class',
      children: [],
    },
  ],
};

console.log(changeClass(tree, 'old-class', 'new-class'));
// {
//   name: 'div',
//   type: 'tag-internal',
//   className: 'hexlet-community',
//   children: [
//     {
//       name: 'div',
//       type: 'tag-internal',
//       className: 'new-class',
//       children: [],
//     },
//     {
//       name: 'div',
//       type: 'tag-internal',
//       className: 'new-class',
//       children: [],
//     },
//   ],
// }