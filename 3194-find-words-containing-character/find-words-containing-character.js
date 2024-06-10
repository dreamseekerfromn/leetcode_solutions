/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let result = [];
    let set = [];
    for(let i = 0; i < words.length; i++){
        let tempSet = new Set();
        for(let j = 0; j < words[i].length; j++){
            tempSet.add(words[i][j]);
        }
        set.push(tempSet);
    }

    for(let k = 0; k < set.length; k++){
        if(set[k].has(x)){
            result.push(k);
        }
    }

    return result;

};