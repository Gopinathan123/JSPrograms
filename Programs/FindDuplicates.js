Array
function finddup() {
    const arrNum=[1,2,5,7,2,6,9,5]
    const duplicates=arrNum.filter((ele,index,arr)=>arr.indexOf(ele)!==index)
   // const unique=arrNum.filter((ele,index,arr)=>arr.indexOf(ele)===index)
    console.log(duplicates);
    // console.log(unique);
}
finddup();

// ==================

function UniqueNumber() {
  let arr1=[1,2,5,7,2,6,9,5];
  for (let i = 0; i < arr1.length; i++) {
      let count=0;
      for (let j = 0; j < arr1.length; j++) {
          if (arr1[i]==arr1[j]) {
              if (i>j) {
                  break;
              }
              else{
                  count++;
              }
          }
      }
      if(count==1)
      {
          console.log(`${arr1[i]}==>${count}`);
      }
  }
}
UniqueNumber()

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


// function findDuplicatesInString(str) {
//     const charCount = {};
//     const duplicates = [];
  
//     // Count each character's occurrences
//     for (let char of str) {
//       if (charCount[char]) {
//         charCount[char] += 1;
//       } else {
//         charCount[char] = 1;
//       }
//     }
  
//     // Find characters with more than 1 occurrence
//     for (let char in charCount) {
//       if (charCount[char] > 1) {
//         duplicates.push(char);
//       }
//     }
  
//     return duplicates;
//   }
  
//   // Example usage
//   const str = "programming";
//   const duplicates = findDuplicatesInString(str);
  
//   console.log(`Duplicates: ${duplicates.join(', ')}`);
  
