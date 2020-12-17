const caesar = function(targetString, shiftVal) {
    resultString = "";
    for(let i = 0; i < targetString.length; i++) {
        let unicodeVal = targetString.charCodeAt(i);
        let resultingUnicode = unicodeVal + shiftVal;
        // A - Z = 65 - 90
        // a - z = 97 - 122
        if(unicodeVal >= 65 && unicodeVal <= 90) {
            if(unicodeVal + shiftVal < 65) {
                let offset = unicodeVal - 65
                let shiftValTrack = shiftVal + offset
                resultingUnicode = 90 - shiftValTrack + 1;
            }
            if(unicodeVal + shiftVal > 90) {
                let offset = 90 - unicodeVal
                let shiftValTrack = shiftVal - offset
                resultingUnicode = 65 + shiftVal - 1; 
            }
            resultString += String.fromCharCode(resultingUnicode);
        }
        else if(unicodeVal >= 97 && unicodeVal <= 122) {
            // if(unicodeVal + shiftVal < 97) {
            //     resultingUnicode = 122 + shiftVal + 2;
            // }
            // if(unicodeVal + shiftVal > 122) {
            //    resultingUnicode = 122 + shiftVal % 97; 
            // }
            if(unicodeVal + shiftVal < 97) {
                let offset = unicodeVal - 97 
                let shiftValTrack = shiftVal + offset
                resultingUnicode = 122 - shiftValTrack + 1;
            }
            if(unicodeVal + shiftVal > 122) {
                let offset = 122 - unicodeVal
                let shiftValTrack = shiftVal - offset
                resultingUnicode = 97 + shiftVal - 1; 
            }
            resultString += String.fromCharCode(resultingUnicode);
        }
        else {
            resultString += targetString[i];
        }
    }

    return resultString;
}

module.exports = caesar
