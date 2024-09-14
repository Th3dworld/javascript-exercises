const sumAll = function(numOne, numTwo) {
    if(numOne < 0 || numTwo < 0 || 
        !Number.isInteger(numOne) || !Number.isInteger(numTwo)){
        return "ERROR";
        }

    let sum = 0;

    if(numOne > numTwo){
        while(numTwo <= numOne){
            sum += numTwo;
            numTwo++;
        }
    }else if(numOne < numTwo){
        while(numOne <= numTwo){
            sum += numOne;
            numOne++;
        }
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
