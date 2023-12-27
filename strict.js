"use Strict"
console.log(this); //here this keyword pointing to the window object
//'this' keyword inside an object function
let obj={
    cname:'abc',
    det:function () {
        console.log(this);//Here 'this' keyword is pointing to the object itself
        
    }
} 
obj.det()

function add() {
    console.log(this);
} add()

let d=()=>{ console.log(this);}