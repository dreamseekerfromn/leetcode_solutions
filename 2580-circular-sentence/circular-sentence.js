/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    sentence = sentence.split(" ");
    if(sentence.length == 1){
        if(sentence[0][0] == sentence[0][sentence[0].length - 1]){
            return true;
        } else {
            return false;
        }
    } else {
        for(let i = 1; i < sentence.length; i++){
            if(sentence[i][0] != sentence[i - 1][sentence[i - 1].length - 1]){
                return false;
            }
        }
        if(sentence[0][0] != sentence[sentence.length - 1][sentence[sentence.length - 1].length - 1]){
            console.log(sentence[0][0])
            console.log(sentence[sentence.length - 1][sentence[sentence.length - 1].length - 1])
            return false;
        }
    }
    return true;
};