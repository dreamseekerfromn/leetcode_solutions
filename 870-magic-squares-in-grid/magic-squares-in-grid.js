/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    function chkMagicSq(x, y){
        let set = new Set();
        for(let i = x; i < x + 3; i++){
            for(let j = y; j < y + 3; j++){
                if(set.has(grid[i][j])){
                    return false;
                } else {
                    if(grid[i][j] > 9){
                        return false;
                    }
                    set.add(grid[i][j]);
                }
            }
        }

        if(grid[x][y] + grid[x+2][y+2] != 10){
            return false;
        }
        if(grid[x + 1][y] + grid[x+1][y+2] != 10){
            return false;
        }
        if(grid[x + 2][y] + grid[x][y+2] != 10){
            return false;
        }
        if(grid[x][y + 1] + grid[x+2][y+1] != 10){
            return false;
        }
        if(grid[x][y] + grid[x][y + 1] + grid[x][y + 2] != 15){
            return false;
        }
        if(grid[x + 2][y] + grid[x + 2][y + 1] + grid[x + 2][y + 2] != 15){
            return false;
        }
        if(grid[x][y] + grid[x + 1][y] + grid[x + 2][y] != 15){
            return false;
        }
        if(grid[x][y + 2] + grid[x + 1][y + 2] + grid[x + 2][y + 2] != 15){
            return false;
        }

        return true;
    }

    if(grid.length < 3 || grid[0].length < 3){
        return 0;
    }

    let result = 0;

    for(let i = 0; i < grid.length - 2; i++){
        for(let j = 0; j < grid[0].length - 2; j++){
            if(chkMagicSq(i, j)){
                result++;
            }
        }
    }

    return result;
};