{
    var a=10;
    let b=20;
    const c=30;
    function add(a,b,c) 
    {
        var a=20;
        let d=20;
        const e=30;
        d=a+d+e;
        console.log(d);
        
    }
    d=a+b+c;
    console.log(d);
    add(60,70,80)

}