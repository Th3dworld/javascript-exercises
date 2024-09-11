const reverseString = function(str) {
    let individualLetters= str.split("");
    let reversedWord = "";

    for(let i = individualLetters.length - 1; i >= 0; i--){
        reversedWord += individualLetters[i];
    }

    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
