import _ from 'lodash';
// const data3 = {
//   user: 'ubuntu',
//   hosts: {
//     0: {
//       name: 'web1',
//     },
//     1: {
//       name: 'web2',
//       null: 3,
//       active: false,
//     },
//   },
// };

let data2 = {name: 'name'};


const cloneDeep = (obj) => {
  const result = {};
  const entries = Object.entries(obj);
  for (const [key, value] of entries) {
    result[key] = _.isObject(value) ? cloneDeep(value) : value;
  }

  return result;
};

const clone = cloneDeep(data2);
console.log(clone);
data2.name = '';
console.log(clone);