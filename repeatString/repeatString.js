const repeatString = function(aString, numTimes) {
    if(numTimes < 0) {
        return "ERROR";
    }

    resultingString = "";
    for(let i = 0; i < numTimes; i++) {
        resultingString += aString;
    }
    return resultingString;
}

module.exports = repeatString
