//Standard Function declaration
function details(name, PhoneNo)
{
    return name+" "+PhoneNo;
}
//fuction invocation
console.log(details('xyz',9876543210));

//Standard function with function expression
let d = function(a,b)
{
    return a+b;
}
console.log(d(10,20));

//invokable function

(function subr(a,b){
    return a-b;
})
console.log((30,12.5));

