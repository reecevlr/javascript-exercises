const fibonacci = function(num) {
    if (num < 0) {
        return 'OOPS';
    }
    
    let x = 1,
        y = 1,
        z;

    if (num <= 2) {
        return 1;
    }

    for (let i = 2; i < num; i++) {
        z = x + y;
        x = y;
        y = z;
    }
    return z;
};

// Do not edit below this line
module.exports = fibonacci;
