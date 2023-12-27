function add(a,b) 
{
console.log(`The sum is ${a+b}`);
}
function sub(a,b)
{
    console.log(`The different is ${a-b}`);
}
//Higher order function
function perform(d1,d2,callback1,callback2)
{
    callback1(d1,d2)//add
    setTimeout(() => {
        callback2(d1,d2)
    }, 2000);
}
perform(123,321,add,sub)