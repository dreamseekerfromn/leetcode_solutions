/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    for(let i = 0; i < letters.length; i++){
        if(target.charCodeAt(0) < letters[i].charCodeAt(0)){
            return letters[i];
        }
    }

    return letters[0];
};