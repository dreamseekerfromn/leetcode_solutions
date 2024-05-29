/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    function traversal(row, col){
        
        if(row < 0 || row >= grid.length || col < 0 || col >= grid[0].length)
            return 1;
        if(grid[row][col] == 1){
            grid[row][col] = -1;
            
            return traversal(row - 1, col)
            +traversal(row + 1, col)
            +traversal(row, col - 1)
            +traversal(row, col + 1);
        }

        return grid[row][col] == 0 ? 1 : 0;
    }

    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] == 1){
                return traversal(i, j);
            }
        }
    }
};
