/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    s1 = s1.split(" ");
    s2 = s2.split(" ");
    let hash1 = {};
    let hash2 = {};
    for(let i of s1){
        if(!hash1[i])
            hash1[i] = true;
        else
            hash1[i]++;
    }
    for(let j of s2){
        if(!hash2[j])
            hash2[j] = 1;
        else
            hash2[j]++;
    }
    let result = [];
    for(let i of s1){
        if(!hash2[i] && hash1[i] == 1){
            result.push(i)
        }
    }
    for(let j of s2){
        if(!hash1[j] && hash2[j] == 1){
            result.push(j)
        }
    }
    return result;
};