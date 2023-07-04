// https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/
const palindromes = function (str) {
    let re = /[\W_]/g;

    let lowRe = str.toLowerCase().replace(re, '');
    let reverse = lowRe.split('').reverse().join('');

    return lowRe === reverse;
};

// Do not edit below this line
module.exports = palindromes;
