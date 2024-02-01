// function Findminmax() {
//     const arrNum=[2,5,13,51,46,79,84,16]
//     const minFunc=(arr)=>   {
//         return arr.reduce(function(pre,cur){
//             return pre<cur?pre:cur;
//         })
//     }
//     console.log(minFunc(arrNum));
//     const maxFunc=(arr)=>   {
//         return arr.reduce(function(pre,cur){
//             return pre>cur?pre:cur;
//         })
//     }
//     console.log(maxFunc(arrNum));
    
// }
// Findminmax()


function findMinMax(array) {
    let minValue = array[0];
    let maxValue = array[0];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] < minValue) {
        minValue = array[i];
      }
      //if (array[i] > maxValue) {
        else{
        maxValue = array[i];
      }
    }
  
    return {minValue, maxValue};
  }
  
  // Example usage
  const array = [5, 1, 4, 2, 8];
  const {minValue, maxValue} = findMinMax(array);
  
  console.log(`Minimum value: ${minValue}`); // Outputs the minimum value in the array
  console.log(`Maximum value: ${maxValue}`); // Outputs the maximum value in the array
  