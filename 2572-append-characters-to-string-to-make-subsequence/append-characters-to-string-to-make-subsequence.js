/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    let index1 = 0;
    
    for(let i = 0; i < s.length; i++){
        if(s[i] == t[index1]){
            index1++;
        }
    }

    return t.length - index1;
};