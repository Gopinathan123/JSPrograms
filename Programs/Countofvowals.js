function Countofvowals(str)
{
    let vowalscount=0;
    let consonentcount=0;
    let vowels='aeiouAEIOU'
    for(let char of str){
        if(vowels.includes(char)){
            vowalscount++;
            //console.log(char,vowalscount);
        }
        else if(char.toLowerCase() !==char.toUpperCase())
        {
            consonentcount++;
           // console.log(char);
        }
    }
    return {vowalscount, consonentcount};
}
const inputString="Test Yanra Software Solution";
const counts=Countofvowals(inputString);
console.log(`Vowels:${counts.vowalscount}, Consonents:${counts.consonentcount}`);