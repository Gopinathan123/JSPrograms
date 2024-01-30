// function countCharoccur(str) {
//     let count={};

//     for (const char of str) {
//         if(!count[char]){
//             count[char]=1;
//         }
//         else{
//             count[char]++;
//         }
//     }
//     return count;
    
// }
// const inputString='Test Yantra';
// const occur=countCharoccur(inputString);

// console.log(occur);

// function countCharacterOccurrences(str) {
//     let str1=str.toLowerCase();
//     return str1.split('').reduce((count, char) => {
//         count[char] = (count[char] || 0) + 1;
//         return count;
//     }, []);
// }

// const inputString = "TestYantra";
// const characterOccurrences = countCharacterOccurrences(inputString);

// console.log(characterOccurrences);

function countCharacterOccurrences(str) {
    let str1=str.toLowerCase();
    let countMap = new Map();

    for (let char of str1) {
        if (!countMap.has(char)) {
            countMap.set(char, 1);
        } else {
            countMap.set(char, countMap.get(char) + 1);
        }
    }

    // If you need an object instead of a Map, you can convert it like this:
    // let countObj = Object.fromEntries(countMap);

    return countMap;
}

const inputString = "TestYantra";
const characterOccurrences = countCharacterOccurrences(inputString);

// Display the result
for (let [char, count] of characterOccurrences) {
    console.log(`${char}: ${count}`);
}
