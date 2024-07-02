/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function(current, correct) {
    current = current.split(":");
    correct = correct.split(":");

    let result = 0;
    let minDiff = (parseInt(correct[0]) * 60 + parseInt(correct[1])) - (parseInt(current[0]) * 60 + parseInt(current[1]));

    result += Math.floor(minDiff / 60);
    minDiff = minDiff % 60;
    result += Math.floor(minDiff / 15);
    minDiff = minDiff % 15;
    result += Math.floor(minDiff / 5);
    minDiff = minDiff % 5;
    result += Math.floor(minDiff / 1);

    return result;
};