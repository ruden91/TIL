/**
 * 네오는 평소 프로도가 비상금을 숨겨놓는 장소를 알려줄 비밀지도를 손에 넣었다. 그런데 이 비밀지도는 숫자로 암호화되어 있어 위치를 확인하기 위해서는 암호를 해독해야 한다. 다행히 지도 암호를 해독할 방법을 적어놓은 메모도 함께 발견했다.

 * 지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 “공백”(“ “) 또는 “벽”(“#”) 두 종류로 이루어져 있다.
 * 전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있다. 각각 “지도 1”과 “지도 2”라고 하자. 지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다. 지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.
 * “지도 1”과 “지도 2”는 각각 정수 배열로 암호화되어 있다.
 * 암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.
 * 
 * input
 * 1 ≦ n ≦ 16
 * arr1, arr2는 길이 n인 정수 배열로 주어진다.
 * 정수 배열의 각 원소 x를 이진수로 변환했을 때의 길이는 n 이하이다. 즉, 0 ≦ x ≦ 2^n - 1을 만족한다.
 * 
 * output
 * ["######", "### #", "## ##", " #### ", " #####", "### # "]
 */

 const getDecToBin = (value) => {
   value = value.toString(2);
  if (value.length < 5) {
    let tempVal = value.split('');
    let len = 5 - value.length;

    for (let i = 0; i < len; i++) {
      tempVal.unshift('0');
    }
    value = tempVal.join('');
  }
  return value;
 }

 const solveSecretMap = (arr1, arr2) => {
   const temp = [];
   // 10진수 -> 2진수 변환
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = getDecToBin(arr1[i])
    arr2[i] = getDecToBin(arr2[i])
  }

  for (let i = 0; i < arr1.length; i++) {
    let tempStr = '';
    for (let j = 0; j < arr2.length; j++) {
      let val1 = parseInt(arr1[i].split('')[j]);
      let val2 = parseInt(arr2[i].split('')[j]);

      tempStr += (val1 === 1 || val2 === 1 ? '#' : ' ');
    }

    temp.push(tempStr)
  }

  return temp;
 }

/**
 * 개선된 버전
 * 비트연산을 활용한 해결법
 */

 const solveSecretMap2 = (arr1, arr2) => {
    const temp = [];
    for (let i = 0; i < arr1.length; i++) {
      const int = arr1[i] | arr2[i];
      const bin = int.toString(2);
      temp.push(bin.replace(/1/g, '#').replace(/0/g, ' '))
    }

    return temp;
 }
 // example
//  const input1 = [9, 20, 28, 18, 11];
//  const input2 = 	[30, 1, 21, 17, 28];

//  solveSecretMap(input1, input2);

 // example2

 const input1 = [46, 33, 33 ,22, 31, 50];
 const input2 = 	[27 ,56, 19, 14, 14, 10];

//  console.log(solveSecretMap(input1, input2));
 console.log(solveSecretMap2(input1, input2));