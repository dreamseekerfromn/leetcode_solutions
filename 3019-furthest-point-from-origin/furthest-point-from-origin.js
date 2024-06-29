/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let hor = 0;
    let lodash = 0;
    for(let i = 0; i < moves.length; i++){
        if(moves[i] == 'L'){
            hor--;
        } else if(moves[i] == 'R'){
            hor++;
        } else {
            lodash++;
        }
    }

    return Math.max(Math.abs(hor - lodash), Math.abs(hor + lodash));
};