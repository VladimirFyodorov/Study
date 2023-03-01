/**
* LEVEL 0.
  Есть склад спец. одежды разных размеров.
  store: Array<{ size: number, quantity: number}>
  
  К нам приходит заказ на спец. одежду
  order: Array<{ id: number, size: [s1: number] | [s1: number, s2: s1+1]  }>, 
  в котором указывается для каждого рабочего его id: number и size: [s1: number] | [s1: number, s2: s1+1]. 
    
  То есть по каждому рабочему может быть указан 
  либо один подходящий размер одежды, либо два, причем 2-ой размер только на 1 больше первого.
  
  Нужно написать функцию processOrder, которая бы на получила на вход:
  1) массив доступных размеров спец. одежды
  store: Array<{ size: number, quantity: number}>
  2) Заказ на спец. одежду для сотрудников:
  order: Array<{ id: number, size: [s1: number] | [s1: number, s2: s1+1]  }>
  
  На выходе функция должна выдать false, 
  если на складе недостаточно одежды на обеспечение всех сотрудников, 
  а если это возможно, то возвращала объект:
  {
    stats: Array<{size: number, quantity: number}>,
    assignment:  Array<{id: number, size: number}>
  }
  где stats - упорядоченный массив по возрастанию size массив 
              размеров size и количества quantity выдаваемой одежды со склада;
  assignment - массив распределения одежды по сотрудникам,
              где id - идентификатор рабочего из order, size - выданный ему размер
    
  Для проверки работоспособности функции запустить runTests()
  
  @param store: Array<{ size: number, quantity: number}>
  @param order: Array<{ id: number, size: [s1: number] | [s1: number, s2: s1+1]  }>
  @return false | {
    stats: Array<{size: number, quantity: number}>,
    assignment:  Array<{id: number, size: number}>
  }
*/
function processOrder(store, order) {
	// код писать только внутри данной функции
  const singleOrders = order.filter(o => o.size.length === 1);
  const doubleOrders = order.filter(o => o.size.length === 2);
  const singleStore = singleOrders.reduce((acc, order) => {
    acc[order.size[0]] = (acc[order.size[0]] | 0) + 1;
    return acc 
  }, {});
  const singleAssignment = singleOrders.map(o => ({ id: o.id, size: o.size[0]}));
  const storeHasAllSingleSizes = Object.keys(singleStore).every(size => store.find(i => i.size === +size));
  if (!storeHasAllSingleSizes) return false;

  const doubleStore = store.reduce((acc, item) => {
    const singleItemQuantity = singleStore[item.size] || 0;
    const newItem = { size: item.size, quantity: item.quantity - singleItemQuantity};
    return [ ...acc, newItem ];
  }, []);

  const doubleStoreHasNegativeValues = doubleStore.some(item => item.quantity < 0);
  if (doubleStoreHasNegativeValues) return false;

  let doubleAssignment = [];
  const copy = (obj) => JSON.parse(JSON.stringify(obj));

  const iter = (restStore, restOrders, assignment) => {
    if (restOrders.length === 0) {
      doubleAssignment = assignment;
      return;
    }
    if (restStore.length === 0) return;


    const restStore1 = copy(restStore);
    const restStore2 = copy(restStore);
    const assignment1 = copy(assignment);
    const assignment2 = copy(assignment);

    const { id, size: [ size1, size2 ]} = restOrders.pop();

    const item1 = restStore1.find(i => i.size === size1);
    if (item1 && item1.quantity > 0) {
      item1.quantity -= 1;
      assignment1.push({ id, size: size1});
      iter(restStore1, copy(restOrders), assignment1);
    }

    const item2 = restStore2.find(i => i.size === size2);
    if (item2 && item2.quantity > 0) {
      item2.quantity -= 1;
      assignment2.push({ id, size: size2});
      iter(restStore2, copy(restOrders), assignment2);
    }
  };

  iter(doubleStore, doubleOrders, []);

  if (doubleAssignment.length !== (order.length - singleAssignment.length)) return false;
  const assignment = [...singleAssignment, ...doubleAssignment];
  const statsObj = assignment.reduce((acc, a) => {
    acc[a.size] = (acc[a.size] | 0) + 1;
    return acc;
  }, {})
  const stats = Object.entries(statsObj).map(([size, quantity]) => ({ size: +size, quantity }));


	return { assignment, stats };
}

function compareNumericArrays(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  
  arr1 = [...arr1].sort();
  arr2 = [...arr2].sort();
  
  for(let i=0; i<arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }
  
  return true;
}

function compareArraysOfNumericArrays(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  
  for(let el1 of arr1) {
    if(arr2.findIndex(el2 => compareNumericArrays(el1, el2)) < 0) {
      return false;
    }
  }
  
  return true;
}

runTests();

function runTests() {
    const tests = [
      {
        store: [{size: 2, quantity: 1}], 
        order: [
          {id: 102, size: [1, 2]}
        ],
        isPosible: true
      },
      {
        store: [{size: 3, quantity: 1}], 
        order: [
          {id: 102, size: [1, 2]}
        ],
        isPosible: false
      },
      {
        store: [{size: 2, quantity: 4}], 
        order: [
          {id: 101, size: [2]}, 
          {id: 102, size: [1, 2]}
        ],
        isPosible: true
      },
      {
        store: [{size: 1, quantity: 1}, {size: 2, quantity: 1}], 
        order: [
          {id: 101, size: [2]}, 
          {id: 102, size: [1, 2]}
        ],
        isPosible: true
      },
      {
        store: [{size: 1, quantity: 1}, {size: 3, quantity: 1}], 
        order: [
          {id: 101, size: [2]}, 
          {id: 102, size: [1, 2]}
        ],
        isPosible: false
      },
      {
        store: [{size: 1, quantity: 1}, {size: 2, quantity: 2}, {size: 3, quantity: 1}], 
        order: [
          {id: 100, size: [1]},
          {id: 101, size: [2]}, 
          {id: 102, size: [2, 3]},
          {id: 103, size: [1, 2]},
        ],
        isPosible: true
      },
      {
        store: [{size: 1, quantity: 1}, {size: 2, quantity: 2}, {size: 3, quantity: 1}, {size: 4, quantity: 2}], 
        order: [
          {id: 100, size: [1]},
          {id: 101, size: [2]}, 
          {id: 102, size: [2, 3]},
          {id: 103, size: [1, 2]},
          {id: 104, size: [4]},
          {id: 105, size: [3, 4]},
        ],
        isPosible: true
      },
      {
        store: [{size: 1, quantity: 1}, {size: 2, quantity: 1}, {size: 3, quantity: 2}, {size: 4, quantity: 2}], 
        order: [
          {id: 100, size: [1]},
          {id: 101, size: [2]}, 
          {id: 102, size: [2, 3]},
          {id: 103, size: [1, 2]},
          {id: 104, size: [4]},
          {id: 105, size: [3, 4]},
        ],
        isPosible: false
      },
      {
        store: [{size: 1, quantity: 1}, {size: 2, quantity: 3}, {size: 4, quantity: 2}], 
        order: [
          {id: 100, size: [1]},
          {id: 101, size: [2]}, 
          {id: 102, size: [2, 3]},
          {id: 103, size: [1, 2]},
          {id: 104, size: [4]},
          {id: 105, size: [3, 4]},
        ],
        isPosible: true
      },
      {
        store: [{size: 1, quantity: 2}, {size: 2, quantity: 2}, {size: 3, quantity: 1}, {size: 4, quantity: 2}], 
        order: [
          {id: 100, size: [1]},
          {id: 101, size: [1, 2]},
          {id: 102, size: [1, 2]},
          {id: 103, size: [2]}, 
          {id: 104, size: [2, 3]},          
          {id: 105, size: [4]},
          {id: 106, size: [3, 4]},
        ],
        isPosible: true
      },
  ];

  let errors = 0;
  for(const test of tests) {
    try{
      const result = processOrder(test.store, test.order);
      
      if(!checkOrderProcessingResult(test, result)) {
        errors++;
        console.log("failed for", test);
      }
    } catch(e) {
      errors++;
      console.log("failed for", test, 'exception', e.message);
    }    
  }

  if(errors === 0) {
    console.log('processOrder test successfuly completed');
  } else {
    console.log(`processOrder test failed with ${errors} errors`);
  }
  console.log('////////////////////////////////////////');
  console.log('////////////////////////////////////////');
  console.log('////////////////////////////////////////');
  console.log('////////////////////////////////////////');
}

function checkOrderProcessingResult(test, result) {
  // console.log('test', test, 'result', result);
  
  if(!test.isPosible && !result) {
    // 
    return true;  
  }

  if((!test.isPosible || !result) && test.isPosible != result) {
    return false;
  }

  compareStatsAndAssigmnet(result);
  compareOrderAndAssigment(test.order, result.assignment);
  compareStoreAndStats(test.store, result.stats);

  return true;
}

function compareStatsAndAssigmnet(result) {
  const {stats, assignment} = result;

  const calcStatsMap = new Map();
  for(const ass of assignment) {
    const m = calcStatsMap.get(ass.size);
    calcStatsMap.set(ass.size, (m || 0) + 1);
  }

  const calcStatsArr = [...calcStatsMap.entries()].sort((e1, e2) => e1[0] - e2[0]);
  const orignalStatsArr = [...stats].sort((e1, e2) => e1.size - e2.size).filter(e => e.quantity > 0); 

  if(calcStatsArr.length !== orignalStatsArr.length) {
    throw new Error('stats does not correspond to assignment');
  }  
}

function compareOrderAndAssigment(order, assignment) {
  for(const o of order) {
    const ass = assignment.find(a => a.id == o.id);
    if(!ass) {
      throw new Error(`Cannot find assigment for id=${o.id}`);
    }

    if(!o.size.includes(ass.size)) {
      throw new Error(`Assigned wrong size (${ass.size}) for id=${o.id}`);
    }
  }
}

function compareStoreAndStats(store, stats) {
  for(const statsItem of stats) {
    if(statsItem.quantity === 0) {
      continue;
    }
    
    const storeItem = store.find(storeI => storeI.size === statsItem.size);
    if(!statsItem) {
      throw new Error(`Cannot find store item for statsItem.size=${statsItem.size}`);
    }

    if(storeItem.quantity < statsItem.quantity) {
      throw new Error(`store item for size=${storeItem.size} has quantity=${storeItem.quantity} < statsItem.quantity=${statsItem.quantity}`);
    }
  }
}

