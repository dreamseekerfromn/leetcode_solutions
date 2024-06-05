/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let hash = {};
    for(let i of words[0]){
        hash[i] = (hash[i] + 1) || 1;
    }
    for(let i of words){
        let hash2 = {};
        for(let j of i){
            hash2[j] = (hash2[j] + 1) || 1;
        }

        for(let k in hash){
            if(!hash2[k]){
                delete hash[k];
            } else {
                if(hash[k] != hash2[k]){
                    hash[k] = (hash[k] < hash2[k] ? hash[k] : hash2[k]);
                }
            }
        }
    }

    let result = "";
    for(let l in hash){
        for(let m = 0; m < hash[l]; m++){
            result += l;
        }
    }

    return result.split('');
};