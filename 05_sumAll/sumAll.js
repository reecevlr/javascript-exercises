const sumAll = function(startNum, endNum) {
    let sum = 0;

    // Validity check (non-number || negative)
    if (typeof startNum !== 'number' || 
        typeof endNum !== 'number' || 
        startNum < 0 || 
        endNum < 0) {
        return 'ERROR'
    }

    if (startNum < endNum) {
        for (; startNum <= endNum; startNum++) {
            sum += startNum;
        }
    } 
    else {
        for (; endNum <= startNum; endNum++) {
            sum += endNum;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
