function findDuplicateCharactersWithCount(str) {
    const charCount = {};
  
    // Count the occurrences of each character in the string
    str.split('').forEach(char => {
      charCount[char] = (charCount[char] || 0) + 1;
    });
  
    // Filter the characters that appear more than once and include their counts
    const duplicatesWithCount = Object.keys(charCount).reduce((acc, char) => {
      if (charCount[char] > 1) {
        acc[char] = charCount[char];
      }
      return acc;
    }, {});
  
    return duplicatesWithCount;
  }
  
  // Example usage
  const str = "programming";
  const duplicates = findDuplicateCharactersWithCount(str);
  
  console.log("Duplicates with count:");
  for (const [char, count] of Object.entries(duplicates)) {
    console.log(`${char}: ${count}`);
  }
  