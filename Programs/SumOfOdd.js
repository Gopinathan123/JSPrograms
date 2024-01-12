let arr=[10,12,15,79,34,43,61];
let sum=0;
function AddOdd() {
    for (let i = 0; i < arr.length; i++) {
        if(!(arr[i]%2==0))
        {
            sum=sum+arr[i];
        }
    }
    console.log("The sum of odd Numbers in an Array is ",sum);
}
AddOdd()
