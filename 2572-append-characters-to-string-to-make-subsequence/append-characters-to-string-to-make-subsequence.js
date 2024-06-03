/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    let index1 = 0;
    let index2 = 0;
    while(index1 < s.length && index2 < t.length){
        if(s[index1] == t[index2]){
            index2++;
            index1++;
        } else {
            index1++;
        }
    }

    return t.length - index2;
};