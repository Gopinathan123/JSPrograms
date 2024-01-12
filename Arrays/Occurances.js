function divisible() {
    
    let arr1=[3,5,15,3,25,34,61,75,25];
    //let b=[]
    //let b=new Array(arr1.length).fill(false);
    //let b=Array.from({length:arr1.length},(val,index)=>false)
    //console.log(b);
    //let b = new Array(arr1.length);
    //console.log(b);
    // for (let i = 0; i < arr1.length; i++) {
    //     let count=1;
    //     b.push(false);
    //     if (typeof b[i]==false) {
    //         for (let j = i+1; j < arr1.length; j++) {
    //             if (arr1[i]==arr1[j]) {
    //                 count++;
    //                 b[i]==true;
    //             }
                
    //         }
            
    //     }
    for (let i = 0; i < arr1.length; i++) {
        let count=0;
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[i]===arr1[j]) {
                if (i>j){
                    break;
                }
                else{
                    count++;
                }
            }    
        }
         if (count>0) {
            console.log(arr1[i]+" occurs==> "+count+" times");
        }  
    }
}
divisible()