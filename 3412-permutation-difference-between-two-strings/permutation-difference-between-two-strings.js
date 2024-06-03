/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let hash = {};
    let result = 0;

    for(let i = 0; i < s.length; i++){
        if(!hash[s[i]]){
            hash[s[i]] = [0,0];
        }
        hash[s[i]][0] = i;
        
        if(!hash[t[i]]){
            hash[t[i]] = [0,0];
        }
        hash[t[i]][1] = i;
    }

    for(let j in hash){
        result += Math.abs(hash[j][0] - hash[j][1]);
    }

    return result;
};