f(5,6);//hoisted function
console.log(f());
function f(a,b=3)
{
    return a+b
}
console.log(f(5));

//hoisted variable
console.log(a);
var a=10
console.log(a);