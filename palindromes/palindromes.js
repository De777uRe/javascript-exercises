const palindromes = function(aString) {
    let re = /[A-za-z]+/g;
    let filteredString = aString.match(re).join();
    filteredString = filteredString.replace(/\W/gi, '');
    filteredString = filteredString.toLowerCase();
    let checkedString = "";

    for (let i = filteredString.length-1; i >= 0; i--) {
        checkedString += filteredString[i];
    }

    return checkedString === filteredString;
}

module.exports = palindromes
