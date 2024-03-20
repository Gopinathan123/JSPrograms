function halfName() {
    let name="Gopinathan";
    let half=name.substring(0,name.length/2);
    for (let i =half.length-1; i >=0; i--) {
        //console.log(v.toString());
        process.stdout.write(half[i]);
    }
   let rem=name.substring(name.length/2,name.length);
   console.log(rem);
}
halfName();
