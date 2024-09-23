const sumAll = function(startingValue, endingValue) {
    let sum = 0;
    if (Math.sign(startingValue)==-1 ||
        Math.sign(endingValue)==-1 ||
        typeof startingValue == "string" || 
        typeof endingValue == "string" ||
        Math.floor(startingValue) != startingValue ||
        Math.floor(endingValue) != endingValue) {
            return "ERROR"
        
    } else if (startingValue < endingValue) {
        for (i=startingValue; i<=endingValue; i++){
            sum += i;
            }
            return sum;
    } else if (startingValue > endingValue){
        for (i=endingValue; i<=startingValue; i++){
            sum +=i;
        } return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
