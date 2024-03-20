function findConsecutiveNumbers(arr) {
    // Iterate through the array elements
    for (let i = 0; i < arr.length - 1; i++) {
      // Check if the current element and the next one are consecutive
      if (arr[i+1]-arr[i]=== 1) {
        console.log(`Consecutive pair: ${arr[i]}, ${arr[i + 1]}`);
      }
    }
  }
  
  // Example usage:
  const arr = [4, 5, 10, 11, 12, 20, 21];
  findConsecutiveNumbers(arr);
  