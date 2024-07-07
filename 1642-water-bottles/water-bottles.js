/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let result = numBottles;
    let stack = numBottles;
    while(stack >= numExchange){
        let newBottle = Math.floor(stack / numExchange)
        result += newBottle;
        stack = stack % numExchange + newBottle;
    }
    return result;
};