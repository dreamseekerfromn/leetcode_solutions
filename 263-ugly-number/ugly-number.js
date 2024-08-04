/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if(n == 0){
        return false;
    }
    if(n == 1){
        return true;
    }
    while(n % 2 == 0 && n / 2 != 1){
        n /= 2;
    }
    if(n == 2 || n == 3 || n == 5){
        return true;
    }
    while(n % 3 == 0 && n / 3 != 1){
        n /= 3;
    }
    if(n == 3 || n == 5){
        return true;
    }
    while(n % 5 == 0 && n / 5 != 1){
        n /= 5;
    }
    if(n == 5){
        return true;
    }
    return false;

};