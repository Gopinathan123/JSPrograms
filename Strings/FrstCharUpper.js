
function FrstUpper(str) {
    let str1=str.toLowerCase().split(" ");
//console.log(str1);
for(let i=0; i<str1.length;i++)
{
    str1[i]=str1[i].charAt(0).toUpperCase()+str1[i].slice(1);
}
const s=str1.join(" ");
console.log(s);
}
FrstUpper('wELCOME to coding beauty');
