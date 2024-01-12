function halfName() {
    let name="Gopinathan";
    let v=name.substring(0,name.length/2);
    for (let i =v.length-1; i >=0; i--) {
        //console.log(v.toString());
        process.stdout.write(v[i]);
    }
   let rem=name.substring(name.length/2,name.length);
   console.log(rem);
}
halfName();
