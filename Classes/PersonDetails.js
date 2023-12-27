class person
{
    static a=5
    b=10
    constructor(fname,lname)
    {
        this.fname=fname;
        this.lname=lname;
    }
    // per(age)
    // {
    //     this.age=age;
    // }
    static details()
    {
        let p1=new person()
        console.log(`static variable ${person.a} ${this.a} Non Staic variable ${p1.b}`);
    }
    familyDetails()
    {
        let p=new person()
        console.log(`Static ${person.a} Non static ${p.b} ${this.b} Construction value ${this.fname} ${this.lname} ${this.age}`);
    }

}
// person.details()
// let p=new person('abc','xyz')
// p.familyDetails()
// console.log(p.fname);
// console.log(p.lname);

class Student extends person
{
    constructor(age)
    {
        super()
        this.age=age
    }
    sample()
    {
        console.log(`${this.fname} ${this.lname} ${this.age} ${this.a} ${this.familyDetails}`);
    }
    familyDetails()
    {
        super.familyDetails()
        console.log('New Implimentation');
    }
}
let d=new Student('abc','nn',30)
d.sample()
d.familyDetails()

export default new person;