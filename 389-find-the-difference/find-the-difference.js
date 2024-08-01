/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {

    s = s.split('').sort((a, b) => a > b ? 1 : -1);
    t = t.split('').sort((a, b) => a > b ? 1 : -1);

    for(let i = 0; i < s.length; i++){
        if(s[i] != t[i]){
            return t[i];
        }
    }
    return t[t.length - 1];
};