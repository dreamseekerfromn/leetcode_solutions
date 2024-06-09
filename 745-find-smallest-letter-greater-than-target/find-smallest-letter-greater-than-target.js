/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    if(letters[0] > target){
        return letters[0];
    }

    let mid = Math.floor(letters.length / 2);
    let start = 1;
    let end = letters.length - 1;
    do{
        if(letters[mid].charCodeAt(0) - target.charCodeAt(0) == 1){
            return letters[mid];
        }

        if(letters[mid] <= target){
            start = mid + 1;
            mid = Math.floor((start + end) / 2);
        } else {
            end = mid;
            for(let i = start; i <= end; i++){
                if(letters[i] > target){
                    return letters[i];
                }
            }
            return letters[0];
        }
    } while(start <= end);
    return letters[0];

};