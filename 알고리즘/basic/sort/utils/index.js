const getRandomNumber = (n = 100) => {
  return Math.floor(Math.random() * n);
}

const getRandomArr = (n = 100) => {
  const temp = [];

  for(let i = 0; i < n; i++) {
    temp.push(getRandomNumber(n));
  }

  return temp;
}

module.exports = {
  getRandomNumber,
  getRandomArr
}