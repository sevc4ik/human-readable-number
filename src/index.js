module.exports = function toReadable (number) {
  let arr1 =['zero','one','two','three','four','five','six','seven','eight','nine'];
  let arr2 =['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  let arr3 = ['', 'eleven', 'twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  
  let answer = '';
  
  const numArr = String(number).split('');
  if (numArr.length == 1) {
    answer = arr1[numArr[0]];
  }
  else if(numArr.length == 2) {
    if(numArr[0] < 2 && numArr[1] != 0) {
      answer = arr3[Number(numArr[1])];
    }
    else if (numArr[1] != 0) {
      answer = arr2[numArr[0]] + ' ' + arr1[numArr[1]];
    }
    else answer = arr2[numArr[0]]
  }
  else if(numArr.length == 3) {
    if(numArr[1] < 1 && numArr[2] != 0) {
      answer = arr1[numArr[0]] + ' hundred ' + arr1[numArr[2]];
    }
    else if(numArr[1] < 2 && numArr[2] != 0) {
      answer = arr1[numArr[0]] + ' hundred ' + arr3[numArr[2]];
    }
    else if(numArr[1] >= 2 && numArr[2] != 0) {
      answer = arr1[numArr[0]] + ' hundred ' + arr2[numArr[1]] + ' ' + arr1[numArr[2]];
    }
    else if(numArr[1] !=0  && numArr[2] == 0) {
      answer = arr1[numArr[0]] + ' hundred ' + arr2[numArr[1]];
    }
    else answer = arr1[numArr[0]] + ' hundred'
  }

  return answer;
}
