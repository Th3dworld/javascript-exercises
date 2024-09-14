const palindromes = function (str) {
    str = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split("");
    str = str.filter(element => element !== ' ');
    let strReversed = str.toReversed().join("");
    str = str.join("");

    return str === strReversed;
};

// Do not edit below this line
module.exports = palindromes;
