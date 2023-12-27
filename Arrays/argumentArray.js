function longestString() {
    let longest = "";
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i].length > longest.length) {
        longest = arguments[i];
      }
      console.log(arguments[i]);
    }
    return longest;
  }
  longestString()
  