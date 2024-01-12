function ShuffleString(){
    let s="I am from Banglore";
    let s1=s.split(" ");
    for (let i = 0; i < s1.length; i++) {
        let temp=s1[0];
        for (let j = 1; j < s1.length; j++) {
            s1[j-1]=s1[j];
            process.stdout.write(s1[j]+" ")
            //console.log(s1[j]+" ");
        }
        s1[s1.length-1]=temp;
        console.log(temp);
    }    
}
ShuffleString();
