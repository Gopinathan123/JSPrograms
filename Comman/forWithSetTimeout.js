for(let i=0;i<5;i++){
    setTimeout(() => {
        console.log(i);
    }, 2000);
}
for(var i=0;i<5;i++){
    setTimeout(() => {
        console.log(i);
    }, 3000);
}