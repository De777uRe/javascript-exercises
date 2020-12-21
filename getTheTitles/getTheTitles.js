const getTheTitles = function(bookArr) {
    return flattenArray(bookArr);
}

function flattenArray(data) {
    // our initial value this time is a blank array
    const initialValue = [];

    // call reduce on our data
    return data.reduce((total, value) => {
        // if the value is an array then recursively call reduce
        // if the value is not an array then just concat our value
        return total.concat(value.title);
    }, initialValue);
}

module.exports = getTheTitles;
