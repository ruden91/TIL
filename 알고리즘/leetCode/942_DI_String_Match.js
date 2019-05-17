/**
Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.

Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:

If S[i] == "I", then A[i] < A[i+1]
If S[i] == "D", then A[i] > A[i+1]
 

Example 1:

Input: "IDID"
Output: [0,4,1,3,2]
Example 2:

Input: "III"
Output: [0,1,2,3]
Example 3:

Input: "DDI"
Output: [3,2,0,1]
 */

/**
 * @param {string} S
 * @return {number[]}
 */
const diStringMatch = S => {
  const sArr = S.split("");
  const result = [];
  let increase = 0;
  let decrease = sArr.length;

  while (sArr.length > 0) {
    const value = sArr.shift();
    if (value === "I") {
      result.push(increase);
      increase++;
    } else {
      result.push(decrease);
      decrease--;
    }

    if (sArr.length === 0) {
      value === "I" ? result.push(increase) : result.push(decrease);
    }
  }
  return result;
};

diStringMatch("IDID");
diStringMatch("III");
diStringMatch("DDI");
diStringMatch("DDDDDIIIDDDDDDDDDDDDDDDDDDD");
