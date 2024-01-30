// function printVowels(str) {
//     const vowels = 'aeiouAEIOU';
//     let vowelsInString = '';

//     for (let char of str) {
//         if (vowels.includes(char)) {
//             vowelsInString += char;
//         }
//     }

//     return vowelsInString;
// }

// const inputString = "Testyantrasoftwaresolutions";
// const vowels = printVowels(inputString);

// console.log(vowels);

function printVowels(str) {
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).join('');
}

const inputString = "Testyantrasoftwaresolutions";
const vowels = printVowels(inputString);

console.log(vowels); // "eoo"

