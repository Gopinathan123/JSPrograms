function findConsecutive(){
    const s="9975612389";
    let s1="";
    for(let i=0;i<s.length;i++){
        if(s.charAt(i+1)-s.charAt(i)===1){
            if(s1.length===0){
               s1=s1+s.charAt(i)+s.charAt(i+1);
            }
            else{
                s1=s1+s.charAt(i+1);
            }
           
        }
        else{
            console.log(s1);
            s1="";
        }
    }
}
findConsecutive()