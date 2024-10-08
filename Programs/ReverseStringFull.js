// function ReverseStrwithSamePos(str) {

// return str.split(' ').map(word=>word.split('').reverse().join('')).join(' ')
    
// }
// const inputString="Test Yantra Software Solution"
// const reversedStr=ReverseStrwithSamePos(inputString);

// console.log(reversedStr);

function ReverseStringFull(str){
    let reversed='';
    let word='';
    for(let char of str){
        if(char==''){
            reversed+=word.split('').reverse().join('')+' ';
            word='';
        }else{
            word+=char;
        }
    }
    reversed+=word.split('').reverse().join('');
    return reversed;
    }
    const inputString="Test Yantra Software Solution"
    const reversedStr=ReverseStringFull(inputString);
    console.log(reversedStr)
    