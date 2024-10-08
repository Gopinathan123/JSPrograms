function orderoccur(input){
let occ=new Map();
let order=1;
for(let i=0;i<input.length;i++){
    let char=input[i];
    if(!occ.has(char)){
        occ.set(char,order++);
    }
}
occ.forEach((value,key) => {
    console.log(`Charecter is ${key} and order of Occurence is ${value} `)
    
});
}
let input="example string";
orderoccur(input)