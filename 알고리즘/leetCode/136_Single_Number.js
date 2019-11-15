/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
	const dict = {};
  let result;
  nums.map(v => {
  	dict[v] = dict[v] ? dict[v] + 1 : 1;
  })
  
	Object.keys(dict).some(key => {
  	if (dict[key] === 1) {
    	result = key;
    }
		return dict[key] === 1;
  });
  
	return result;
};