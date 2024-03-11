let str="I LOVE COMPUTER PROGRAMMING"
let str1=str.split('').reverse().join('').toString();
let str2=str.split(' ').map(word=>word.split('').reverse().join('')).join(' ').toString();
let str3=str.split(' ').reverse().join(' ').toString();
console.log(str1);
console.log(str2);
console.log(str3);