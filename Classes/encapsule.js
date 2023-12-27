class Person
{
    #pin=6545
    get gpinno()
    {
       return this.#pin;
    }
    set spinno(val)
    {
        this.#pin=val
    }
}
let p=new Person();
console.log(p.gpinno);
p.spinno=4565;
console.log(p.gpinno);