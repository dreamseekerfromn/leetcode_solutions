/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let row = new Array(matrix.length).fill(false);
    let col = new Array(matrix[0].length).fill(false);

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] == 0){
                row[i] = true;
                col[j] = true;
            }
        }
    }

    for(let i = 0; i < row.length; i++){
        if(row[i]){
            for(let j = 0; j < matrix[i].length; j++){
                matrix[i][j] = 0;
            }
        }
        
    }

    for(let j = 0; j < col.length; j++){
        if(col[j]){
            for(let i = 0; i < matrix.length; i++){
                matrix[i][j] = 0;
            }
        }
    }
};