/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let closeP = 0;
    let openP = 0;
    
    for(let i of s){
        if(i == '('){
            openP++;
        } else if(i == ')' && openP > 0){
            openP--;
        } else {
            closeP++;
        }
    }
    
    return openP + closeP;
};