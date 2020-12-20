const caesar = function(string, shift) {
    return string
        .split("")
        .map(char => shiftChar(char, shift))
        .join("");
};

const codeSet = code => (code < 97 ? 65 : 97);

// this function is just a fancy way of doing % so that it works with negative numbers
// see this link for details:
// https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
const mod = (n, m) => (n % m + m) % m;

const shiftChar = (char, shift) => {
    const code = char.charCodeAt();

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        return String.fromCharCode(
            mod(code + shift - codeSet(code), 26) + codeSet(code)
        );
    }
    return char;
};

// My horrible attempt
// const caesar = function(targetString, shiftVal) {
//     resultString = "";
//     for(let i = 0; i < targetString.length; i++) {
//         let unicodeVal = targetString.charCodeAt(i);
//         let resultingUnicode = unicodeVal + shiftVal;
//         // A - Z = 65 - 90
//         // a - z = 97 - 122
//         if(unicodeVal >= 65 && unicodeVal <= 90) {
//             if(unicodeVal + shiftVal < 65) {
//                 resultingUnicode = -1
//                 while(resultingUnicode < 65) {
//                     let offset = unicodeVal - 65;
//                     let shiftValTrack = Math.abs(Math.abs(shiftVal) - Math.abs(offset));
//                     resultingUnicode = 90 - shiftValTrack + 1;
//                 }
//             }
//             if(unicodeVal + shiftVal > 90) {
//                 let offset = 90 - unicodeVal;
//                 let shiftValTrack = shiftVal - offset;
//                 resultingUnicode = 65 + shiftValTrack - 1; 
//                 while(resultingUnicode > 90) {
//                     offset = unicodeVal - 90;
//                     shiftValTrack = Math.abs(Math.abs(shiftVal) - Math.abs(offset));
//                     resultingUnicode = 65 + shiftValTrack - 1;
//                 }
//             }
//             resultString += String.fromCharCode(resultingUnicode);
//         }
//         else if(unicodeVal >= 97 && unicodeVal <= 122) {
//             if(unicodeVal + shiftVal < 97) {
//                 let offset = unicodeVal - 97 
//                 let shiftValTrack = shiftVal + offset
//                 resultingUnicode = 122 - shiftValTrack + 1;
//             }
//             if(unicodeVal + shiftVal > 122) {
//                 let offset = 122 - unicodeVal
//                 let shiftValTrack = shiftVal - offset
//                 resultingUnicode = 97 + shiftVal - 1; 
//             }
//             resultString += String.fromCharCode(resultingUnicode);
//         }
//         else {
//             resultString += targetString[i];
//         }
//     }

//     return resultString;
// }

module.exports = caesar
