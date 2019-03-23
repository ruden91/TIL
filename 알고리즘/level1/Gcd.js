// 약수 구하는 함수
const getDivisor = (value = 0) => {
  if (typeof value !== 'number') {
    return;
  }

  const temp = [];
  for (let i = 1; i <= value; i++) {
    if (value % i === 0) {
      temp.push(i);
    }
  }

  return temp;
}

//공통 약수 구하는 함수
const getCommonDivisor = (a = 0, b = 0) => {
   if (typeof a !== 'number' || typeof b !== 'number') {
     return;
   }

  const temp = [];
  const len = a > b ? a : b;

  for (let i = 1; i <= len; i++) {
    if (a % i === 0 && b % i === 0) {
      temp.push(i)
    }
  }

  return temp;
}

// 최대공약수 구하는 함수
const getGcd = (a, b) => {
  return getCommonDivisor(a,b).pop();
}

console.log(getDivisor(280));
console.log(getCommonDivisor(30, 280))
console.log(getGcd(30, 280))