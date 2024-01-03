//Remove duplicate of the array or find only unique element in the array
// function onlyUnique(value, index, array) {
//     return array.indexOf(value) === index;
//   }
//   var a = ['a', 1, 'a', 2, '1'];
//   var unique = a.filter(onlyUnique);
  
//   console.log(unique); // ['a', 1, 2, '1']

function findunq() {
    const arrNum=[1,2,5,7,2,6,9,5]
    const unique=arrNum.filter((ele,index,arr)=>arr.indexOf(ele)===index)
    console.log(unique);
}
findunq();