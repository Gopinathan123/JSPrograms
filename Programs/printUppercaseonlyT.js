// function replaceUppercaseWithT(str) {
//     return str.replace(/[A-Z]/g, 'T');
// }

// const inputString = "Test Yantra Software Solutions";
// const modifiedString = replaceUppercaseWithT(inputString);

// console.log(modifiedString); 


function replaceUppercaseWithT(str) {
    return str.split('').map(char => {
        return (char >= 'A' && char <= 'Z') ? 'T' : char;
    }).join('');
}

const inputString = "Test Yantra Software Solutions";
const modifiedString = replaceUppercaseWithT(inputString);

console.log(modifiedString); 
