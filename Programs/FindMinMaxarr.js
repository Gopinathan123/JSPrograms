function Findminmax() {
    const arrNum=[2,5,13,51,46,79,84,16]
    const minFunc=(arr)=>   {
        return arr.reduce(function(pre,cur){
            return pre<cur?pre:cur;
        })
    }
    console.log(minFunc(arrNum));
    const maxFunc=(arr)=>   {
        return arr.reduce(function(pre,cur){
            return pre>cur?pre:cur;
        })
    }
    console.log(maxFunc(arrNum));
    
}
Findminmax()