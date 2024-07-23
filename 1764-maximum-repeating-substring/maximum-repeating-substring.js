/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    let repeating = "";
    repeating += word;
    let count = 0;
    while(sequence.includes(repeating)){
        count++;
        repeating += word;
    }
    return count;
};