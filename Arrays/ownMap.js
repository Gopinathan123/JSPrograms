function newMap(func) {
    let destarr=[]
    const srcnewarr=this.length;
    for (let i = 0; i < srcnewarr; i++) {
        destarr.push(func.call(this,this[i]))
        
    }
    return destarr;
}
Object.defineProperty(Array.prototype,'newMap',{
    value:newMap
});
const arr=[1,2,3]
const newarr=arr.newMap(item=>item+1)
console.log(newarr);

