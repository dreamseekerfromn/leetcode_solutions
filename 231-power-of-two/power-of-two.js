/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n > 1 && n % 2 == 0){
        return isPowerOfTwo(n/2);
    }
    return (n == 1);
};