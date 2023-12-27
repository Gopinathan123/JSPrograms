// function details(name,phnno=9876543210,loc)//Passed default parameter as phnno=9876543210
// {
//     console.log("person details are "+" "+name+" "+loc+" "+phnno);
// //template litrals
//     console.log(`person details are ${name} ${phnno} ${loc}`);
// //Log the Argument array
//     console.log(arguments);

// }
// details('abc',9876541230,'Bengalore')

function p() 
{
    var f=['Gopinathan','Neyas','Gunjan','Amarnath'];
    f.map((element,index)=>{
        console.log('inside arrow function');
        console.log('index is '+index+' value is '+element);})
}
p();
// for (let index =0; index < arguments.length; index++){
//     if(arguments[index].length>f.length){
//         f=arguments[index];
//     }
// }
// console.log(f);
