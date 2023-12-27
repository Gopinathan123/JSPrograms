function add(a,b,c) {
    var a=10;
    let e=90;
    const f=30;
    {
        var a=70;
        let b=20;
        const c=30;
        d=a+b+c;
        console.log("value of d is: "+d);
    }
    
    d=a+b+c;
    console.log(d);
}
add(40,30,60);