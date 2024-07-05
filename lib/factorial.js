// factorial function
// breaks at 170 (max double value)
const factMemo = [];
const factorial = (k) => {
  if (k === 0) {
    return 1;
  }
  if (factMemo[k]) {
    return factMemo[k];
  }
  let f = 1;
  for (let i = 2; i <= k; i++) {
    f *= i;
  }
  factMemo[k] = f;
  return f;
};

export { factorial, factorial as fact };
