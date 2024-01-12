// var arr=[0,1,2,3,4,5,6]
// var total=arr.reduce(function (a,b) {return a+b;})
// var tot1=arr.reduceRight(function (a,b) {
//     return b-a;
// })

// console.log(total);
// console.log(tot1);

const array1 = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;

console.log(array1.findLastIndex(isLargeNumber));
