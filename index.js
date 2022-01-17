// Code your solution in this file!

const returnFirstTwoDrivers = function (array) {
    return [array[0] , array[1]];
}

const returnLastTwoDrivers = function (array) {
    const copyArray = [...array];
    return copyArray.splice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers] ;

function createFareMultiplier(number) {
    return fare => fare * number ;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers (array , aFunction){
    if (aFunction === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(array);
    } else if (aFunction === returnLastTwoDrivers) {
        return returnLastTwoDrivers(array);
    }
}
