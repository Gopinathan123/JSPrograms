function outer()
{
    let count=0;
    return function inner()
    {
        console.log(count++);
        console.log(++count);
    }
}
let ret=outer();
ret();
ret();
