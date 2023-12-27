const randomNumberPromise=new Promise((resolve, reject)=>{
    setTimeout(() => {
        const randomValue=Math.random();
        if(randomValue>0.5)
        {
            resolve(randomValue)
        }
        else{
            reject("value is too small")
        }
    }, 2000);
})
randomNumberPromise.then(result=>
{
    console.log("Promise is fulfilled with value:"+result);
})
.catch(error=>{
    console.log("Promise is rejected with error "+error);
})