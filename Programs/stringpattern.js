function StrPattern() {
    let str='gopinathan';//"java";//"JavaScript";
    let char=str.split('');
    for (let i = 0; i < char.length; i++) {
       for(let j=0;j<char.length;j++){
        if(i===j){
            break;
        }
        else{
            process.stdout.write(char[j]);
        }
       }
       console.log(char[i]);
    } 
}
StrPattern()