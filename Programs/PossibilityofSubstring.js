// get all possible substring of length 2
let inputStr = "aabbbaccds";
let substringLength = 2;
let substrings = [];

// Iterate over the characters of the input string
for (let i = 0; i <= inputStr.length - substringLength; i++) {
    // Extract substrings of length 2
    let substring = inputStr.substring(i, i + substringLength);
    substrings.push(substring);
}

// Display the result
console.log("All substrings of length", substringLength, "are:", substrings);