/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let index1 = 0;
    let index2 = Math.floor(Math.sqrt(c));
    
    while(index1 <= index2){
        if(index1 * index1 + index2 * index2 == c){
            return true;
        } else if(index1 * index1 + index2 * index2 < c){
            index1++;
        } else {
            index2--;
        }
    }

    return false;
};