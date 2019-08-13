/**
 * 어떤 아이가 n개의 계단을 오른다. 한 번에 1계단 오르기도 하고, 2계단이나 3계단을 오르기도 한다.
 * 계단을 오르는 방법이 몇 가지가 있는지 계산하는 함수를 구하시오.
 */
const countWays = n => {
  let memo = {};

  return getCountWays(n, memo);
};

const getCountWays = (n, memo) => {
  if (n < 0) {
    return 0;
  } else if (n === 0) {
    return 1;
  } else if (memo[n]) {
    return memo[n];
  }

  memo[n] =
    getCountWays(n - 1, memo) +
    getCountWays(n - 2, memo) +
    getCountWays(n - 3, memo);

  return memo[n];
};

console.log(countWays(100));
