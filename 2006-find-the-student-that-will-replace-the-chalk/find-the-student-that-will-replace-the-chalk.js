/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    let total = 0;

    for(let c of chalk)
        total += c;
    
    k = k % total;

    if(k == 0){
        return 0;
    }

    let index = 0;
    while(k > 0){
        k -= chalk[index];
        
        if(k < 0)
            return index;
        if(k == 0){
            if(index + 1 >= chalk.length)
                return 0;
            return index + 1;
        }
        index++;
    }
};