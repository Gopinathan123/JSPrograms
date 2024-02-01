function Countofconsonents(str)
{
    // let vowalscount=0;
    let consonentcount=0;
    let vowels='aeiouAEIOU'
    for(let char of str){
        if((!vowels.includes(char)) && char>='a'&&char<='z'||char>='A' &&char<='Z'){
            consonentcount++;
        }
    }
    return consonentcount;
}
const inputstring='Test Yantra';
const NumofConst=Countofconsonents(inputstring);

console.log(NumofConst);

