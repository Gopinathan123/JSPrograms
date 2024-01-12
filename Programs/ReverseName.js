function reverseMyName() {
    let str="GopinathanS"
    let chr=str.split('');
    for (let i = chr.length-1; i >=0 ; i--){
             process.stdout.write(chr[i]);
    }
    
}
reverseMyName()