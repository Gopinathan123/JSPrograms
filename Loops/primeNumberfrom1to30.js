var a=30;
for(var i=1;i<=a;i++)
{
    var count=0;
    for(var j=2;j<=i/2;j++){
        if(i%j==0)
        {
            count++;
            break;
        }
    }
    if(count==0 && i!=1)
    {
        console.log(i+" ");
    }
}