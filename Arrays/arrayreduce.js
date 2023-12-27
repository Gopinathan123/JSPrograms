var arr=[0,1,2,3,4,5,6]
var total=arr.reduce(function (a,b) {return a+b;})
var tot1=arr.reduceRight(function (a,b) {
    return b-a;
})

console.log(total);
console.log(tot1);