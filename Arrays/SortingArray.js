let arr=[10,30,15,25,16,85] 
var val1
function Sort() {
    for (let i = 0; i < arr.length; i++) {

        for (let j = i+1; j < arr.length; j++) {
            if(arr[i]<arr[j])
            {
                val1=arr[i];
                arr[i]=arr[j];
                arr[j]=val1;
            }          
            
        }
          
    }
    for (let k = 0; k < arr.length; k++) {
        console.log(arr[k]+" ");    
    }
    
}
Sort()