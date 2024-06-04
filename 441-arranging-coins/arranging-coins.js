/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let row = 0;

    for(let i = 1; n >= i; i++){
        n -= i;

        /*
        if(n < 0){
            return row;
        }
        */
        row++;
    }

    return row;
};