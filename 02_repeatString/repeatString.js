const repeatString = function(inputString, noOfTimesRepeating) {
    let resultString = '';
    if (noOfTimesRepeating<0){
        return "ERROR"
    } else {
        for (i=1; i<=noOfTimesRepeating; i++){
            resultString = resultString.concat('', inputString);
    }  return resultString;
}
    
};

// Do not edit below this line
module.exports = repeatString;
