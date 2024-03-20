function palinnum(n){
    let temp=n;
    let rev=0
    while(n>0){
        let rem=n%10;
        rev=rev*10+rem;
        n=Math.floor(n/10);
    }
    if(temp===rev){
        console.log(temp,"is a palindrome");
    }
    else
    {
        console.log(temp, "is not a palindrome");
    }
}
const n=121;
palinnum(n)
