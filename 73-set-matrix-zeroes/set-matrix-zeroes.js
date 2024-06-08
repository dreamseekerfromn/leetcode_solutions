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

    row.forEach((r, index) => {
        if(r){
            for(let j = 0; j < matrix[index].length; j++){
                matrix[index][j] = 0;
            }
        }
    })
    
    col.forEach((c, index) => {
        if(c){
            for(let j = 0; j < matrix.length; j++){
                matrix[j][index] = 0;
            }
        }
    })
};