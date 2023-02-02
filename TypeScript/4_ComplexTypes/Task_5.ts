type Order = {
  status: 'Created',
}

type CostOneHundred = {
  cost: 100
}

type OneHundredOrder = Order & CostOneHundred;

const oneHundredOrder: OneHundredOrder = {
  status: 'Created',
  cost: 100,
};

export { oneHundredOrder };

