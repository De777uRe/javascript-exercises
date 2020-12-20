let findTheOldest = function(peopleArr) {
    let oldest;
    let maxAge = -1;
    peopleArr.forEach(person => {
        if("yearOfDeath" in person) {
            if(person.yearOfDeath - person.yearOfBirth > maxAge) {
                maxAge = person.yearOfDeath - person.yearOfBirth;
                oldest = person;
            }
        }
        else {
            if(2020 - person.yearOfBirth > maxAge) {
                maxAge = 2020 - person.yearOfBirth;
                oldest = person;
            }
        }
    });
    return oldest;
}

module.exports = findTheOldest
