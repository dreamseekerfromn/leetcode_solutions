/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    let x = 0;
    let y = 0;
    let furthest = 0;
    const direction = [[0,1],[1,0],[0,-1],[-1,0]];
    let curr = 0;

    let hash = {};
    for(let i of obstacles){
        hash[i] = true;
    }

    for(let i of commands){
        if(i > 0){
            for(let j = 0; j < i; j++){
                if(hash.hasOwnProperty([x + direction[curr%4][0], y + direction[curr%4][1]])){
                    break;
                }
                x += direction[curr%4][0];
                y += direction[curr%4][1];
            }
            furthest = Math.max(furthest, x * x + y * y);
        } else if(i == -1){
            curr++;
        } else {
            curr+=3;
        }
    }

    return furthest;
};