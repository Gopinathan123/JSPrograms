let s="AxB1#*eZ8";
let uc="";
let lc="";
let sc="";
let no="";
for(let i=0;i<s.length;i++){
    if(s.charAt(i)>='A' && s.charAt(i)<='Z'){
        uc=uc+s.charAt(i);
       
    }
    else if(s.charAt(i)>='a'&& s.charAt(i)<='z'){
        lc=lc+s.charAt(i);
    }
    else if(s.charAt(i)>='0'&& s.charAt(i)<='9'){
        no=no+s.charAt(i);
    }
    else{
        sc=sc+s.charAt(i);
    }
    
}
console.log(uc);
console.log(lc);
console.log(no);
console.log(sc);