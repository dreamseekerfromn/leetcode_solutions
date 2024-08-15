/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let five = 0;
    let ten = 0;
    let twenty = 0;

    if(bills[0] != 5){
        return false;
    }

    for(let i = 0; i < bills.length; i++){
        if(bills[i] == 5){
            five++;
        } else if(bills[i] == 10){
            if(five <= 0){
                return false;
            }
            five--;
            ten++;
        } else {
            if(ten >= 1 && five >= 1){
                ten--;
                five--;
            } else if(five >= 3){
                five -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
};