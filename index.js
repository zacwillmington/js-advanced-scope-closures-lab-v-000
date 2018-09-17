
function produceDrivingRange(blockRange){
    return function(start, end){
        let blockStartNumberString = start.split("th").join();
        let blockStartInt = parseInt(blockStartNumberString, 10);

        let blockEndNumberString = end.split("th").join();
        let blockEndInt = parseInt(blockEndNumberString, 10);

        let blockDifference = blockEndInt - blockStartInt;
        if (blockDifference - blockRange > 0){
            return `${blockDifference - blockRange} blocks out of range`;
        } else {
            return `within range by ${blockRange - blockDifference}`;
        }
    }
}

function produceTipCalculator(percentage){
    return function(amount){
        
    }
}
