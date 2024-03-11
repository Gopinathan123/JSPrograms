// function findConsecutiveNumbers(arr) {
//     let numSet = new Set(arr);
//     let maxLength = 0;
//     let startingNumber = null;

//     for (let num of arr) {
//         // Check if num is the start of a sequence
//         if (!numSet.has(num - 1)) {
//             let currentNum = num;
//             let currentLength = 1;

//             // Find length of current sequence
//             while (numSet.has(currentNum + 1)) {
//                 currentNum += 1;
//                 currentLength += 1;
//             }

//             // Update maxLength and startingNumber if current sequence is longer
//             if (currentLength > maxLength) {
//                 maxLength = currentLength;
//                 startingNumber = num;
//             }
//         }
//     }

//     if (maxLength > 0) {
//         console.log(`Longest sequence starts at ${startingNumber} with length ${maxLength}`);
//         // To display the sequence itself:
//         let sequence = [];
//         for (let i = 0; i < maxLength; i++) {
//             sequence.push(startingNumber + i);
//         }
//         console.log(`Sequence: ${sequence.join(', ')}`);
//     } else {
//         console.log("No consecutive sequence found.");
//     }
// }

// // Example usage
// let arr = [5, 1, 9, 3, 8, 20, 4, 10, 2, 11, 3];
// findConsecutiveNumbers(arr);


function findConsecutiveNumbers(arr) {
    // Iterate through the array elements
    for (let i = 0; i < arr.length - 1; i++) {
      // Check if the current element and the next one are consecutive
      if (Math.abs(arr[i] - arr[i + 1]) === 1) {
        console.log(`Consecutive pair: ${arr[i]}, ${arr[i + 1]}`);
      }
    }
  }
  
  // Example usage:
  const arr = [4, 5, 10, 11, 12, 20, 21];
  findConsecutiveNumbers(arr);
  