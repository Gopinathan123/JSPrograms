// function findRepeatedConsonants(str) {
//     let counts = {};
//     const vowels = 'aeiouAEIOU';
//     let consonants = {};

//     // Count each consonant
//     for (let char of str) {
//         if (!vowels.includes(char) && char.toLowerCase() !== char.toUpperCase()) {
//             counts[char] = (counts[char] || 0) + 1;
//         }
//     }

//     // Find consonants that are repeated
//     for (let char in counts) {
//         if (counts[char] > 1) {
//             consonants[char] = counts[char];
//         }
//     }

//     return consonants;
// }

// const inputString = "Test Yantra Software Solutions";
// const repeatedConsonants = findRepeatedConsonants(inputString);

// console.log(repeatedConsonants);


function findRepeatedConsonants(str) {
    //const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    const vowels='aeiouAEIOU';
    let count = {}; //let count = [];
    let repeated = {}; // let repeated = [];

    for (let char of str) {
        if (!vowels.includes(char)) {
            count[char] = (count[char] || 0) + 1;
        }
    }

    for (let char in count) {
        if (count[char] > 1) {
            repeated[char] = count[char];
        }
    }

    return repeated;
}

const inputString = "Test Yantra Software Solutions";
const repeatedConsonants = findRepeatedConsonants(inputString);

console.log(repeatedConsonants); 
