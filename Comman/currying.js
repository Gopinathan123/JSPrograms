function curry(a) 
{
    return function(b) {
        return typeof b === "undefined" ? a : curry(a+b);
    }    
}
console.log(curry(10)());
console.log(curry(10)(20)());
console.log(curry(10)(20)(30)())