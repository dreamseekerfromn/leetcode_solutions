/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let totalRow = 0;
    let arr = [];
    for(let i = 0; i < bank.length; i++){
        let row = 0;
        for(let j = 0; j < bank[i].length; j++){
            if(bank[i][j] == '1'){
                devices++;
                row++
            }
        }
        if(row != 0)
            arr.push(row);
        if(row > 0){
            totalRow++;
        }
    }
    
    if(totalRow > 1){
        let laser = 0;
        for(let k = 1; k < arr.length; k++){
            laser += arr[k] * arr[k-1];
        }
        return laser;
    }
    else{
        return 0;
    }

};
