var num=new Array(12,13,14,15)
console.log("Printing original array");
num.forEach(function (val) {
    console.log(val);
})

var nums=num.reverse()

console.log("printing reversed array");
nums.forEach(function (val) {
    console.log(val);
})
const a=[10,12,13,15,16];
console.log(`${a.at(2)}`);