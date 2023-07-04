const findTheOldest = function(arr) {
    const currYear = new Date().getFullYear();

    const newArr = arr.sort((a, b) => {
        if (typeof a.yearOfDeath === 'undefined') {
            a.yearOfDeath = currYear;
        } 
        if (typeof b.yearOfDeath == 'undefined') {
            b.yearOfDeath = currYear;
        }

        let ageA = a.yearOfDeath - a.yearOfBirth;
        let ageB = b.yearOfDeath - b.yearOfBirth;

        return ageA > ageB ? -1 : 1;
    });
    return newArr.shift();
};

// Do not edit below this line
module.exports = findTheOldest;
