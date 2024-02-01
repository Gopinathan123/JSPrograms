function bubbleSort(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 0; i < array.length-1; i++) {
        if (array[i] > array[i+1]) {
          done = false;
          var tmp = array[i];
          array[i] = array[i+1];
          array[i+1] = tmp;
        }
      }
    } 
    return array;
  }
  var numbers = [12, 10, 15, 11, 14, 13, 16];
  let sortedarr=bubbleSort(numbers);
  console.log(sortedarr);