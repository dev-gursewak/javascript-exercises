const leapYears = function(inputYear) {
    if (inputYear%4 == 0 && inputYear%25 != 0 ) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
