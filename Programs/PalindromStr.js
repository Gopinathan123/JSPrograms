// let str = 'madam';
// let strRev = str.split('').reverse().join('');
// if(str === strRev){
// console.log('palindrome')
// }
// else{
// console.log('not palindrome')
// }

function palinStr(str){
    let rev='';
    for(let i=str.length-1;i>=0;i--)
    {
      rev+=str.charAt(i);
    }
    if(rev===str)
    {
      console.log(rev,'is a palindrom string')
    }
    else{
      console.log(rev,'is not a palindrome string')
    }
}
let str='level';
palinStr(str)