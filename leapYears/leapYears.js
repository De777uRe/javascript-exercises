const leapYears = function(aYear) {
    isLeapYear = false;

    if (aYear % 100 === 0) {
        if (aYear % 400 === 0) {
            isLeapYear = true;
        }
    }
    else if (aYear % 4 === 0 ) {
        isLeapYear = true;
    }

    return isLeapYear;
}

module.exports = leapYears
