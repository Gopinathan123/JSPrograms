var n=6;
var fact=1;
for(var i=1;i<=n;i++){
    fact=fact*i;
}
console.log("Factorial of "+n+" is "+fact);



let num=12321;
let sum=0;
//console.log(sum);
let temp=num;
while(num>0)
{
    let rem=num%10;
    sum=(sum*10)+rem;
    sum = Math.floor(sum)
    num=num/10;
    num=Math.floor(num)
}
console.log(sum);
console.log(temp);
if(temp==sum)
{
    console.log(temp+" is a palindrom");
}
else{
    console.log(temp+" is not a palindrom");
}