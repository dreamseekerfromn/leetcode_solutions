/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let row = {};
    let col = {};

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] == 0){
                row[i] = true;
                col[j] = true;
            }
        }
    }

    for(let i in row){
        for(let j = 0; j < matrix[Number(i)].length; j++){
            matrix[Number(i)][j] = 0;
        }
    }

    for(let j in col){
        for(let i = 0; i < matrix.length; i++){
            matrix[i][Number(j)] = 0;
        }
    }

    return matrix;
};