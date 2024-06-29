/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let horizontal = 0;
    let vertical = 0;
    for(let i = 0; i < moves.length; i++){
        if(moves[i] == 'U'){
            vertical++;
            continue;
        }

        if(moves[i] == 'D'){
            vertical--;
            continue;
        }

        if(moves[i] == 'L'){
            horizontal--;
            continue;
        }

        if(moves[i] == 'R'){
            horizontal++;
        }
    }

    return !horizontal && !vertical;
};