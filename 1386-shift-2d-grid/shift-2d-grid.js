/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let arr = grid.flat();
    let rowLength = grid[0].length;
    let result = [];

    for(let i = 0; i < k; i++){
        let temp = arr.pop();
        arr.unshift(temp);
    }

    for(let i = 0; i < grid.length; i++){
        let tempArr = [];
        for(let j = 0; j < rowLength; j++){
            let temp = arr.shift();
            tempArr.push(temp);
        }
        result.push(tempArr);
    }

    return result;
};