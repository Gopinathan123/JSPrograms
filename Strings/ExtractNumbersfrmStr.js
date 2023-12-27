// Function to extract numbers
function extractNumber() {
 
    // Input string
    let str = "jhkj7682834";
    console.log(str)
 
    // Using match with regEx
    let matches = str.match(/(\d+)/);
    //console.log(matches);
    // Display output if number extracted
    if (matches) {
        console.log(matches[0]);
    }
}
 
// Function call
extractNumber();