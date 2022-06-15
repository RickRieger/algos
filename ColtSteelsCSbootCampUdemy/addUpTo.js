const addUpTo = (n) => {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
};

// The function below is better for time complexity

// const addUpTo = (n) => {
//   return (n * (n + 1)) / 2;
// };

console.log(addUpTo(7));
