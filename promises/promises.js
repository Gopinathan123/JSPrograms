async function Execute() {
    console.log("login to the application");
    let p=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Navigate to the home page");
            reject('error');
        }, 2000);
    })
    await p.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})
    let p1= new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Fetch page title');
            reject('error')
    }, 3000);})
    
    await p1.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})
    console.log('Logout from the application');
}
Execute()