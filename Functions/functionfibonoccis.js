function fib(a,b){
console.log(a);
    for(let i=0;i<=10;i++)
    {
        let sum=a+b;
        b=a;
        a=sum;
        console.log(sum);
    }
}
fib(0,1)