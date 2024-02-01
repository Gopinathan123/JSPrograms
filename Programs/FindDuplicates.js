//Array
// function finddup() {
//     const arrNum=[1,2,5,7,2,6,9,5]
//     const duplicates=arrNum.filter((ele,index,arr)=>arr.indexOf(ele)!==index)
//    // const unique=arrNum.filter((ele,index,arr)=>arr.indexOf(ele)===index)
//     console.log(duplicates);
//     // console.log(unique);
// }
// finddup();

//-===============

//String
// function finddupstr(str){
//     let str1=str.split('');
//     let dup=str1.filter((ele,index,s)=>s.indexOf(ele)!==index);
//     console.log(dup);

// }
// const inputString='testyantrasoftwareSolutions'
// const dupstring=finddupstr(inputString)

// ================

// function dupstr(str) {
//     let charcount={};
//     for (const char of str) {
//         charcount[char]=(charcount[char]||0)+1;
//         if(charcount[char]===2)
//         {
//             console.log(`Duplicate found: ${char} and count is: ${charcount[char]}`);
//         }
//     }
// }
// dupstr("javascript");


function findDuplicatesInString(str) {
    const charCount = {};
    const duplicates = [];
  
    // Count each character's occurrences
    for (let char of str) {
      if (charCount[char]) {
        charCount[char] += 1;
      } else {
        charCount[char] = 1;
      }
    }
  
    // Find characters with more than 1 occurrence
    for (let char in charCount) {
      if (charCount[char] > 1) {
        duplicates.push(char);
      }
    }
  
    return duplicates;
  }
  
  // Example usage
  const str = "programming";
  const duplicates = findDuplicatesInString(str);
  
  console.log(`Duplicates: ${duplicates.join(', ')}`);
  
