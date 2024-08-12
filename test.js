const x = Array(10)
  .fill([])
  .map(() => Array(10).fill(0));
console.log('x>>>1', x);
x[0][0] = 100;
console.log('x>>>2', x);
