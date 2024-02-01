let prodectdatails={
    pname:'Mobile',
    price:25000,
    brand:'Samsung',
    cartdetails:function()
    {
        console.log(`product details are ${this.pname} ${this.price} ${this.brand}`);
    }
}

let product2=Object.create(prodectdatails)
console.log(prodectdatails);
console.log(product2);

product2.pname='laptop',
product2.price=27000,
product2.brand='HP'
product2.cartdetails=function() {
    console.log('new implementation');
}
console.log(product2);
product2.cartdetails()
