let a=['javascript','java','api','selenium']
let j;
let s="";
for(let i=0;i<a.length;i++){
    s=a[i];
    for(j=0;j<s.length;j++){
        if(j=2){
            break;
        }
    }
    console.log(s.charAt(j));
    //process.stdout.write(s.charAt(j)+" ");
}