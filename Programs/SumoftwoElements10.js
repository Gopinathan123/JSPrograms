function findPairWithSumTen(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === 10) {
        //   return [arr[i], arr[j]];
            console.log(arr[i]+","+arr[j]);
        }
      }
    }
    return null; // Return null if no such pair exists
  }
  
  // Example usage
  const array = [2, 4, 3, 7, 8,6,1,9];
  const result = findPairWithSumTen(array);
  
//   if (result) {
//     console.log(`Pair with sum of 10 is: ${result[0]} and ${result[1]}`);
//   } else {
//     console.log('No pair with sum of 10 found.');
//   }
  