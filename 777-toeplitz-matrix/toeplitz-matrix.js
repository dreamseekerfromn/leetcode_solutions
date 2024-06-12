/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    if(matrix.length == 1 || matrix[0].length == 1){
        return true;
    }
    for(let i = 1; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(j == 0)
                continue;
            if(matrix[i][j] != matrix[i-1][j-1]){
                return false;
            }
        }
    }
    return true;
};