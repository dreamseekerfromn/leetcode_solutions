/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let hash = new Array(26).fill(0);
    for(let i of words[0]){
        hash[i.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for(let i of words){
        let hash2 =  new Array(26).fill(0);
        for(let j of i){
            if(hash[j.charCodeAt(0) - 'a'.charCodeAt(0)] > 0)
                hash2[j.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            else
                hash[j.charCodeAt(0) - 'a'.charCodeAt(0)] = 0;
        }

        for(let k = 0; k < 26; k++){
            if(hash[k] != hash2[k]){
                hash[k] = (hash[k] < hash2[k] ? hash[k] : hash2[k]);
            }
        }
    }

    let result = [];
    for(let l = 0; l < hash.length; l++){
        if(hash[l] > 0){
            for(let m = 0; m < hash[l]; m++){
                result.push(String.fromCharCode(l + 'a'.charCodeAt(0)));
            }
        }
        
    }

    return result;
};