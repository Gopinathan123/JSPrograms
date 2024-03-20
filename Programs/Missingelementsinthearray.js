function findMissingElements(arr) {
    const fullRange = Array.from({ length: 10 }, (_, index) => index + 1);
    //_ can be used for comman convention and it indicates parameter is not needed
    // console.log(fullRange);
    const missingElements = fullRange.filter(num => !arr.includes(num));
    
    return missingElements;
}

// Example usage
const myArray = [1, 2, 4, 7, 8, 10];
const missingElements = findMissingElements(myArray);

console.log("The missing elements are:", missingElements);