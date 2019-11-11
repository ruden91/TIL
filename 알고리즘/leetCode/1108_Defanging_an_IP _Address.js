/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = function(address) {
  return address.replace(/\./gi, '[.]')
};

const test = '1.1.1.1';

defangIPaddr(test) // 1[.]1[.]1[.]1