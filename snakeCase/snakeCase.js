const snakeCase = function(aString) {
    let snakeCase = "";
    
    let wtfCaseRe = /\w+\.+\w+/;
    if (wtfCaseRe.test(aString)) {
        let wtfCaseArray = aString.split("..");
        for (let i = 0; i < wtfCaseArray.length; i++) {
            snakeCase += wtfCaseArray[i].toLowerCase() + '_';
        }
    }
    else {
        let wordArray = aString.split(' ');
        for(let i = 0; i < wordArray.length; i++) {
            let word = wordArray[i];
            let snakeCaseRe = /.+[A-Z]+/;

            if(snakeCaseRe.test(word)) {
                let camelCaseArray = word.split(/[A-Z]/);
                let capitalsArray = word.split(/[a-z]+/);
                for (let j = 0; j < camelCaseArray.length; j++) {
                    if(capitalsArray[j] !== '') {
                        snakeCase += capitalsArray[j].toLowerCase();
                    }
                    snakeCase += camelCaseArray[j].toLowerCase() + '_';
                }
                continue;
            }
            else {
                word = word.toLowerCase();
                if(word.includes('-')) {
                    let kebabCaseArray = word.split('-');
                    for (let j = 0; j < kebabCaseArray.length; j++) {
                        snakeCase += kebabCaseArray[j] + '_';
                    }
                }
                else {
                    word = word.replace(/[^\w]+/g, '');
                    snakeCase += word + '_';
                }
            }

        }
    }

    return snakeCase.slice(0, -1);
}

module.exports = snakeCase
