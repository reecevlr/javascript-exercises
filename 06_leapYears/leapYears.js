const leapYears = function(year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    }
    else if (year % 4 === 0 &&
             year % 100 === 0 && 
             year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }

    /*
        Since OR returns first truthy value, 
        if year is !divisible by 100, it returns true. Else,
        it checks if it is divisible by 400, if it is, leapYear. Else,
        !leapYear.
        
        return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    */
};

// Do not edit below this line
module.exports = leapYears;
