function convertToAlternateCase(input) {
    let result = '';
    let makeUpperCase = true;

    for (let i = 0; i < input.length; i++) {
        const character = input[i];
        if (character.match(/[a-z]/i)) { // Check if it's a letter
            if (makeUpperCase) {
                result += character.toUpperCase();
            } else {
                result += character.toLowerCase();
            }
            makeUpperCase = !makeUpperCase; // Toggle the case for the next character
        } else {
            // If it's not a letter, just append it without toggling the case
            result += character;
        }
    }

    return result;
}

const input = "hello world";
const output = convertToAlternateCase(input);
console.log(output);
