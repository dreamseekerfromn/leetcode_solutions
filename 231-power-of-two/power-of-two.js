/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let log = (Math.log(n)/Math.log(2)).toFixed(10);
    return log % 1 == 0;
};