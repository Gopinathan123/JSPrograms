function finddup() {
    const arrNum=[1,2,5,7,2,6,9,5]
    const duplicates=arrNum.filter((ele,index,arr)=>arr.indexOf(ele)!==index)
    console.log(duplicates);
}
finddup();