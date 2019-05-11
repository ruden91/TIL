const selfDividingNumbers = (left, right) => {
  const result = [];
  for (let i = left; i <= right; i++) {
    let validate = true;
    let numbers = String(i).split("");

    for (let j = 0; j < numbers.length; j++) {
      const number = parseInt(numbers[j]);
      if (i % number !== 0) {
        validate = false;
        break;
      }
    }

    if (validate) {
      result.push(i);
    }
  }

  return result;
};

console.log(selfDividingNumbers(1, 22));
