function UniqueNumber() {
    let arr1=[3,5,15,3,25,34,61,75,25];
    for (let i = 0; i < arr1.length; i++) {
        let count=0;
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[i]==arr1[j]) {
                if (i>j) {
                    break;
                }else{
                    count++;
                }
            }
        }
        if(count==1)
        {
            console.log(arr1[i]+"==> "+count);
        }
    }
}
UniqueNumber()
