const reverseString = function(string) {
    const charList = string.split('');
    for (let i = 0, n = charList.length; i < n / 2; i++) {
        const tmp = charList[i];
        charList[i] = charList[n - i - 1];
        charList[n - i - 1] = tmp;
    }
    return string = charList.join('');
};

// Do not edit below this line
module.exports = reverseString;
