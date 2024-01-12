function dupstr(str) {
    let charcount={};
    for (const char of str) {
        charcount[char]=(charcount[char]||0)+1;
        if(charcount[char]===2)
        {
            console.log(`Duplicate found: ${char} and count is: ${charcount[char]}`);
        }
    }
}
dupstr("javascript");
