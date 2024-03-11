// let input = 93084;
// let inputArr = input.toString().split('');
// let res = inputArr.reduce((acc, cur) => {
//         let curNum = parseInt(cur);
//         let accNum = parseInt(acc);
//         return accNum + (curNum**5);
//     })
//     const test = parseInt(input);
// if (res === test) {
//         console.log('is armstrong')
//     }
// else {
//         console.log('not armstrong')
// }

function isArmstrongNumber(number) {
    let sum = 0;
    let temp = number;
    const numberOfDigits = number.toString().length;
  
    while (temp > 0) {
      let digit = temp % 10;
      sum += digit ** numberOfDigits;
      temp = Math.floor(temp / 10);
    }
  if(sum===number){
    console.log(`${number} is an amstrong number`);
  }
  else{
    console.log(`${number} is not an amstrong number`);
  }
    //return sum === number;
  }

  let num=54748;

  let amstrongNum=isArmstrongNumber(num);
  
  // Example usage
//   console.log(isArmstrongNumber(54748));
  //console.log(`${num} is an amstrong number`);
  //console.log(isArmstrongNumber(92727)); 
