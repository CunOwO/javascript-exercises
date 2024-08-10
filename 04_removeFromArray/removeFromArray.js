const removeFromArray = function(array, ...valuesToBeRemoved) {
    for (let i = 0, length = valuesToBeRemoved.length; i < length; i++) {
        let removalCount = 0;
        let removalIndex;
        for (let j = 0, length = array.length; j < length; j++) {
            if (array[j] === valuesToBeRemoved[i]) {
                removalIndex = j - removalCount;
                removalCount += 1;
            }
        }
        array.splice(removalIndex, removalCount);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
