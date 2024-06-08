/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    //declare vars
    let row = new Set();
    let col = new Set();

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] == 0){
                row.add(i);
                col.add(j);
            }
        }
    }

    for(let i of row){
        for(let j = 0; j < matrix[i].length; j++){
            matrix[i][j] = 0;
        }
    }

    for(let j of col){
        for(let i = 0; i < matrix.length; i++){
            matrix[i][j] = 0;
        }
    }
};