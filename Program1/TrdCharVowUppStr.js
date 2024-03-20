//let str='welcome to coding beauty';
function trdupper(str){
    var str1= str.toLowerCase().split(" ")
    for(let i=0;i<str1.length;i++){
        if(str1[i].charAt(2)==='a'||str1[i].charAt(2)==='e'||str1[i].charAt(2)==='i'||str1[i].charAt(2)==='o'||str1[i].charAt(2)==='u'){
            str1[i]=str1[i].charAt(0).toUpperCase()+str1[i].slice(1);
        }
    }
    let s=str1.join(" ");
    console.log(s);
}
trdupper('welcome to coding beauty')
    
