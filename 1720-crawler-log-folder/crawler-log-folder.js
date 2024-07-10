/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let floor = 0;
    for(let i = 0; i < logs.length; i++){
        if(logs[i] == './'){
            continue;
        } else if(logs[i] == '../'){
            if(floor == 0){
                continue;
            }
            floor--;
        } else {
            floor++;
        }
    }
    return floor;
};