const fibonacci = function(index) {
    index = parseInt(index);
    if (index === 0) {
        return 0;
    }
    if (index < 0) {
        return "OOPS";
    }
    const array = [1, 1];
    for (let i = 0; i < index - 2; i++) {
        const item = array[i] + array[i + 1];
        array.push(item);
    }
    return array[index - 1];
};

// Do not edit below this line
module.exports = fibonacci;
