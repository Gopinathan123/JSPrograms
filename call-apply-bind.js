"use strict"
let Tourisumpackage={
    packagename:'Indonesia',
    fromdate:'dec 19 2023',
    todate:'dec 31 2023',
    packagecost:50000
}

let Tourisumpackage1={
    packagename:'Singapore',
    fromdate:'Dec 31 2023',
    todate:'Jan 09 2024',
    packagecost:50000
}
let packageDetail=function (a,b) {
    console.log(`package deatils are ${this.packagename} from ${this.fromdate} to ${this.todate} and ${this.packagecost} and ${a+b}`);
}

//call method
packageDetail.call(Tourisumpackage,10,12);

//apply method
packageDetail.apply(Tourisumpackage1,[20,30])

//bind method
let d=packageDetail.bind(Tourisumpackage,10, 32)
console.log(d);
d()
