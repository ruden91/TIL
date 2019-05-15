/**
Given two strings s and t which consist of only lowercase letters.

String t is generated by random shuffling string s and then add one more letter at a random position.

Find the letter that was added in t.

Example:

Input:
s = "abcd"
t = "abcde"

Output:
e

Explanation:
'e' is the letter that was added.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = (s, t) => {
  let dict = {};
  let result;
  let sArr = s.split("").map(v => {
    if (v in dict) {
      dict[v]++;
    } else {
      dict[v] = 1;
    }
  });
  let tArr = t.split("").map(v => {
    if (v in dict) {
      dict[v]--;
    } else {
      dict[v] = 1;
    }
  });

  Object.keys(dict).map(k => {
    if (dict[k] !== 0) {
      result = k;
    }
  });

  return result;
};

findTheDifference("abcd", "abcde"); // e
