let s="12:25:01,13:15:03,06:30:21";
// let s1=s.split(",");
// for(let i=0;i<s1.length;i++){
//     let s2=s1[i].split(":");
//     for(let j=0;j<s2.length;j++){
//         if(s2[j]%5===0){
//            let v=Math.floor(s2[j])+1;
//             console.log(v.toString());
//         }
        
//     }
   
// }

let s1=s.split(/[^0-9]/);
let a;
// console.log(s1);
for (let i = 0; i < s1.length; i++) {
    if(s1[i]%5===0){
        ++s1[i];
    }    
    process.stdout.write(s1[i]+" ");
}

