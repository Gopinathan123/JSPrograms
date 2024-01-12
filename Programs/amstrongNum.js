let input = 153;
let inputArr = input.toString().split('');
let res = inputArr.reduce((acc, cur) => {
        let curNum = parseInt(cur);
        let accNum = parseInt(acc);
        return accNum + (curNum**3);
    })
    const test = parseInt(input);
if (res === test) {
        console.log('is armstrong')
    }
else {
        console.log('not armstrong')
}
