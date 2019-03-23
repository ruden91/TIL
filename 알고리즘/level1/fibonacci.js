// iteration O(n)
// const fibonacci = (num) => {
//   let first = 0;
//   let second = 1;
//   let newValue;
//   let i = 0;

//   while(i < num) {
//     newValue = first + second;

//     first = second;
//     second = newValue;
//     i++;
//   }

//   return newValue;
// }

// recursion O(2n)
const fibonacci = (num) => {
  if (num <= 1) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(10));