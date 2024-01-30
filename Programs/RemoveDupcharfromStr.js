// function removeDuplicates(str) {
//     let str1=str.toLowerCase();
//     let seen={};
//     let result='';
//     for(let char of str1){
//         if(!seen[char]){
//             result+=char;
//             seen[char]=true;
//         }
//     }
//     return result;
    
// }
// const inputString='Test Yantra';
// const dup=removeDuplicates(inputString);

// console.log(dup);


function removeDuplicates(str) {
       let str1=str.toLowerCase();
       return [...new Set(str1)].join('');
}
const inputString='Test Yantra';
const dup=removeDuplicates(inputString);
console.log(dup);
