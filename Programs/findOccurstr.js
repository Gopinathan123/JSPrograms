function UniqueNumber() {
    let s='KaniyanKaviyan'
    for (let i = 0; i < s.length; i++) {
        let count=0;
        for (let j = 0; j < s.length; j++) {
            if (s.charAt(i)===s.charAt(j)) {
                if (i>j) {
                    break;
                }
                else{
                    count++;
                }
            }
        }
        if(count>=1)  //find occurance of value
        //if(count>1) //find Duplicates value
        //if(count==1) // find unique value
        {
            console.log(`${s.charAt(i)}==>${count}`);
        }
    }
  }
  UniqueNumber()