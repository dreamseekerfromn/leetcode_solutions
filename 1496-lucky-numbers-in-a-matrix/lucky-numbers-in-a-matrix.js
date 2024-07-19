/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    let row = [];
    let col = [];
    for(let i = 0; i < matrix.length; i++){
        let min = Infinity;
        for(let j = 0; j < matrix[0].length; j++){
            min = Math.min(min, matrix[i][j]);
        }
        row.push(min);
    }

    for(let i = 0; i < matrix[0].length; i++){
        let max = -Infinity;
        for(let j = 0; j < matrix.length; j++){
            max = Math.max(max, matrix[j][i]);
        }
        col.push(max);
    }

    let result = [];

    for(let i = 0; i < col.length; i++){
        if(row.includes(col[i])){
            result.push(col[i]);
        }
    }
    return result;
};