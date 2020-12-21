const getTheTitles = function(bookArr) {
    return flattenArray(bookArr);
}

function flattenArray(data) {
    // our initial value this time is a blank array
    const initialValue = [];

    // call reduce on our data
    return data.reduce((total, value) => {
        return total.concat(value.title);
    }, initialValue);
}

module.exports = getTheTitles;
