/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    sentence = sentence.split(' ');
    for(let i = 0; i < sentence.length; i++){
        for(let j of dictionary){
            for(let k = 0; k < j.length; k++){
                if(j[k] !== sentence[i][k]){
                    break;
                }
                if(k == j.length - 1){
                    sentence[i] = j;
                }
            }
        }
    }

    return sentence.join(' ');
};