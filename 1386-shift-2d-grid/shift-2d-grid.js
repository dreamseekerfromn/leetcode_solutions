/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let arr = grid.flat();
    let rowLength = grid[0].length;
    let result = [];

    if(grid.length == 1 && grid[0].length == 1){
        return grid;
    }

    for(let i = 0; i < grid.length; i++){
        let temp = new Array(grid[0].length).fill(0);
        result.push(temp);
    }

    for(let j = 0; j < grid.length; j++){
        for(let l = 0; l < grid[j].length; l++){
            let col = (l+k) % grid[j].length;
            let row = Math.floor((l+k) / grid[j].length) + j;

            while(row >= grid.length){
                row -= grid.length;
            }
            
            result[row][col] = grid[j][l]
        }
    }

    return result;
};