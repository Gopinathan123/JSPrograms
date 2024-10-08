function arrayprime(){
    let arr=[11,13,15,20,24,23];
    for(let i=0;i<arr.length;i++){
        let count = 0;
        const ele=arr[i];
        for(let j=1;j<=ele;j++)
        {
            if(ele%j===0){
            count++;
            }
        }
        if(count===2)
        {
            console.log(ele);
        }
    }
    
}
arrayprime();
