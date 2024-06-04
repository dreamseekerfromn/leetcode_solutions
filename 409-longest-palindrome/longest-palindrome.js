/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let result = 0;
    let set = new Set();

    if(s.length <= 1){
        return s.length;
    }

    for(let i = 0; i < s.length; i++){
        if(set.has(s[i])){
            result += 2;
            set.delete(s[i]);
        } else {
            set.add(s[i]);
        }
    }

    if(set.size >= 1){
        result++;
    }

    return result;
};