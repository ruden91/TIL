/**
 * 7. Reverse Integer
 * Given a 32-bit signed integer, reverse digits of an integer.
 * Example 1:
 *
 * Input: 123
 * Output: 321
 * Example 2:
 *
 * Input: -123
 * Output: -321
 * Example 3:
 *
 * Input: 120
 * Output: 21
 *
 * Note:
 * Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume  * that your function returns 0 when the reversed integer overflows.
 */

/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  const strXArr = String(x).split("");
  const negative = strXArr.find(v => v === "-") ? "-" : "";
  const value = parseInt(negative + strXArr.reverse().join(""));
  const result = Math.pow(2, 31) - 1 <= Math.abs(value) ? 0 : value;
  return result;
};

reverse(0);

reverse(123);

reverse(-123);
reverse(120);
reverse(901000);

reverse(1534236469);

/**
 * Runtime: 88 ms, faster than 63.39% of JavaScript online submissions for Reverse Integer.
 * Memory Usage: 35.9 MB, less than 47.36% of JavaScript online submissions for Reverse Integer.
 */
