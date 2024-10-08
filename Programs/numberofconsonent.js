function Countofconsonents(str)
{
    // let vowalscount=0;
    let consonentcount=0;
    let vowels='aeiouAEIOU';
    let str1=str.toLowerCase();
    for(let char of str1){
        if(vowels.includes(char) && char>='a'&& char<='z'||char>='A' && char<='Z'){
            consonentcount++;
        }
    }
    return consonentcount;
}
const inputstring='TestYantra';
// let inputstring1=inputstring.toLowerCase();
const NumofConst=Countofconsonents(inputstring);

console.log(NumofConst);

