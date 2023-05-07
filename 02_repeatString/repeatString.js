const repeatString = function(str, num) {
    let repeat = '';

    if (num < 0) {
        repeat = 'ERROR';
    }

    for (let i = 0; i < num; i++) {
        repeat += str;
    }
    return repeat;
};

repeatString('hey', 3);
repeatString('hey', 10);
repeatString('hey', 1);
repeatString('hey', 0);
repeatString('hey', -1);

// Do not edit below this line
module.exports = repeatString;
