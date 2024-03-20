function generatePascalsTriangle(rows) {
    let pattern = '';
    for (let i = 0; i < rows; i++) {
       let row = '';
       for (let j = 0; j <= i; j++) {
          let coef = factorial(i) / (factorial(j) * factorial(i - j));
          row += coef + ' ';
       }
       pattern += row.trim() + '\n';
    }
    return pattern;
 }
 
 function factorial(num) {
    if (num <= 1) {
       return 1;
    }
    return num * factorial(num - 1);
 }
 
 // Example usage:
 console.log(generatePascalsTriangle(5));