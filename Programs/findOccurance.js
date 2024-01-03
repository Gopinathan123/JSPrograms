// const myArray = ['a', 'b', 'c', 'c', 'b', 'd'];

// let uniqueElements = [...new Set(myArray)];
// //console.log(uniqueElements);

// const elementCounts = uniqueElements.map(value => [value, myArray.filter(str => str === value).length]);

// console.log(elementCounts);

// ------
const myArray = ['a', 'b', 'a', 'c', 'b'];

let uniqueElements = [...new Set(myArray)];
//console.log('--', uniqueElements);

const elementCounts = uniqueElements.map((item) => {
  return [item, myArray.filter((itm) => itm === item).length]
})

console.log(elementCounts);

