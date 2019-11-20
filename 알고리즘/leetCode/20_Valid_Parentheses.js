/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
	if (s.length === 1) {
  	return false;
  } else if (s.length === 0) {
  	return true;
  }
  
	let valid = true;
  let temp = [];
	const pairs = {
  	'(': ')',
    '{': '}',
    '[': ']'
  }
  
	s.split('').map(v => {
		if (pairs[v]) {
    	temp.push(pairs[v]);
    } else {
			if (v !== temp.pop()) {
				valid = false;
      }
    }
  })
  
	return temp.length > 0 ? false : valid;
}
