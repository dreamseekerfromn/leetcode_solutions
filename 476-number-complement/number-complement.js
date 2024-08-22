/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let binNum = num.toString(2);    
    let rev = "";
    
    for(let i = 0; i < binNum.length; i++){

        if(binNum[i] == '0') rev += '1';
        else rev += '0';
    }
    
    return parseInt(rev, 2)
};