// function printRepeatedCharacters(str) {
//     let charCount = {};
//     let repeatedChars = new Set();

//     // Count the occurrences of each character
//     for (let char of str) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }

//     // Find characters that are repeated
//     for (let char in charCount) {
//         if (charCount[char] > 1) {
//             repeatedChars.add(char);
//         }
//     }

//     return Array.from(repeatedChars).join('');
// }

// const inputString = "testyantrasoftwaresolution";
// const repeatedCharacters = printRepeatedCharacters(inputString);

// console.log(repeatedCharacters); // "lo"


function printRepeatedCharacters(str) {
    let counts = {};

    // Count each character
    for (let char of str) {
        counts[char] = (counts[char] || 0) + 1;
    }

    // Filter characters that have a count greater than 1
    let repeatedChars = Object.keys(counts).filter(char => counts[char] > 1);

    return repeatedChars.join('');
}

const inputString = "testyantrasoftwaresolution";
const repeatedCharacters = printRepeatedCharacters(inputString);

console.log(repeatedCharacters); // "lo"

