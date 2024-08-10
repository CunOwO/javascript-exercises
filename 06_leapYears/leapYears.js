const leapYears = function(year) {
    if (year % 4 !== 0) return false;
    
    return year % 100 !== 0 ? true :
    year % 400 === 0 ? true : false;

};

// Do not edit below this line
module.exports = leapYears;
