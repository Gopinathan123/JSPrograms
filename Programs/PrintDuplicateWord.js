function printDuplicateWord(str){
    let str1=str.split(' ');
    for(let i=0;i<str1.length;i++)
    {
        let count=0;
        for(let j=0;j<str1.length;j++){
            if(str1[i]===str1[j]){
                if(i>j){
                    break;
                }
                else{
                    count++;
                }
            }
        }
        if(count>1){
            console.log(str1[i]+"==>"+count);
        }
    }

}
let s='my name is name which is common name';
let duplicateswords=printDuplicateWord(s);