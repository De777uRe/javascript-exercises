const reverseString = function(aString) {
    resultingString = "";

    for(let i = aString.length-1; i >= 0; i--) {
        resultingString += aString[i];
    }

    return resultingString;
}

module.exports = reverseString
