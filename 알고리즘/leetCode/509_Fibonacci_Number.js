/**
 * @param {number} N
 * @return {number}
 */
const getFibValue = N => {
  let result = [];
  for (let i = 0; i <= N; i++) {
    let count;

    if (i === 0) {
      count = 0;
    } else if (i === 1) {
      count = 1;
    } else {
      count = result[i - 1] + result[i - 2];
    }

    result.push(count);
  }

  return result.pop();
};

const fib = N => {
  if (N === 0) {
    return 0;
  } else if (N === 1) {
    return 1;
  } else if (N < 0) {
    return 0;
  }

  return getFibValue(N - 1) + getFibValue(N - 2);
};
