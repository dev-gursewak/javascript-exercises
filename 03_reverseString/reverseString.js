const reverseString = function(inputString) {
    let stringArray = [];
    for (string of inputString){
        stringArray.push(string);
    }
    stringArray.reverse();
    return stringArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
