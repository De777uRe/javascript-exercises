const removeFromArray = function() {
    let args = Array.from(arguments);
    let originalArray = args[0];

    for(let i = 1; i < args.length; i++) {
        if(originalArray.includes(args[i])) {
            if(originalArray.length === 1) {
                originalArray.pop();
            }
            else {
                let index = originalArray.indexOf(args[i]);
                originalArray.splice(index, 1);
            }
        }
    }

    return originalArray;
}

module.exports = removeFromArray
