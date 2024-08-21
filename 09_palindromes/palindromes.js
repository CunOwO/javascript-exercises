const palindromes = function (string) {
    
const originalArray = string.toLowerCase().split("");
const plainArray = originalArray.filter((char) => char >= "A" && char <= "Z" || char >= "a" && char <= "z" || char >= "0" && char <= "9" );
const cloneArray = plainArray.slice();
cloneArray.reverse();

return cloneArray.length === plainArray.length && cloneArray.every((char, index) => char === plainArray[index]);
};

// Do not edit below this line
module.exports = palindromes;
