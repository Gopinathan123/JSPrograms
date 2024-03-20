function diamendpattern()
{
    let n=5;
    for(let i=0;i<=n;i++){
        if(i>n){
            console.log("  ");
        }
        else{
        let String="* ";
        console.log(String.repeat(i));
        }
    }
    for(let j=n;j>=0;j--){
        let String="* ";
        console.log(String.repeat(j))
    }
}
diamendpattern()