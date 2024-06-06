/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    if(hand.length % groupSize != 0){
        return false;
    }

    let hash = {};
    hand = hand.sort();
    for(let i of hand){
        hash[i] = (hash[i] + 1) || 1;
    }

    for(let j in hash){
        while(hash[j] > 0){
            for(let k = 0; k < groupSize; k++){
                if(hash[Number(j) + k] > 0){
                    hash[Number(j) + k]--;
                    if(hash[Number(j) + k] == 0){
                        delete hash[Number(j) + k];
                    }
                } else {
                    return false;
                }
            }
        }
    }

    return true;
};