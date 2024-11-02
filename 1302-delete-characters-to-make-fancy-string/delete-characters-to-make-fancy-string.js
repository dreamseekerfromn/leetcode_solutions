/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let result = "";
    let currentLetter = "";
    let consecutive = 0;
    for(let i = 0; i < s.length; i++){
        if(currentLetter != s[i]){
            currentLetter = s[i];
            consecutive = 1;
        } else {
            consecutive++;
        }
        if(consecutive > 2){
            continue;
        }
        result += s[i];
    }
    return result;
};