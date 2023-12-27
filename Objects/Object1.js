//Standard way of creating objects
let personaldetails=
{
    pname:'xyz',
    age:20,
    PhoneNo:[6381777480,9791616666],
    Location:'Bengaluru',
    det:function()
    {
        console.log(this.age);
    },
    spousedetail:
    {
        Sname:'abc',
        sphno:9876542310,
        Location:'Ptcr'
    }
}
//Call the perticular function property in the object
personaldetails.det()

//print all the properties in the object
console.log(personaldetails);

//print perticular properties in the object
console.log(personaldetails.spousedetail);

// delete perticular properties in the Object
delete personaldetails.spousedetail.Location;
console.log(personaldetails.spousedetail);

//To update perticular details
personaldetails.spousedetail.sphno=124567890;
console.log(personaldetails);

//Object Creation Using Construction Function
function det(name, age)
{
    console.log(this);
    this.name=name;
    this.age=age;
}
let dt=new det('abc',32);
console.log(dt);
let dt1=new det('xyz',26);
console.log(dt1);

//Object Creation using class
class details{
    constructor(name,age)
    {
        console.log(this);
        this.name=name;
        this.age=age;
    }
}
let z=new details('dddd',42)
console.log(z);

let s=new Object()
s.dname='eeee'
s.dage=23
console.log(s);
