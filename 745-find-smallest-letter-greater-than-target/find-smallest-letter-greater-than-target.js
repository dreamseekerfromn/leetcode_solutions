/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let index1 = Math.floor(letters.length / 2);
    let compare = letters[index1].charCodeAt(0) - target.charCodeAt(0)
    if(compare == 1){
        
        return letters[index1];
    }

    if(compare <= 0){
        for(let i = index1 + 1; i < letters.length; i++){
            if(letters[i] > target){
                return letters[i];
            }
        }
    } else {
        for(let i = 0; i <= index1; i++){
            if(letters[i] > target){
                return letters[i];
            }
        }
    }

    return letters[0];
};