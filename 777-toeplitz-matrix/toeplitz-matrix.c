bool isToeplitzMatrix(int** matrix, int matrixSize, int* matrixColSize) {
    /*if(matrixSize == 1 && *matrixColSize == 1){
        return true;
    }*/

    for(int i = 1; i < matrixSize; i++){
        for(int j = 1; j < *matrixColSize; j++){
            if(matrix[i][j] != matrix[i-1][j-1]){
                return false;
            }
        }
    }

    return true;
}