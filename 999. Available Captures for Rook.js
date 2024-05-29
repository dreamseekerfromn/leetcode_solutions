/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let row;
    let col;
    let result = 0;

    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            if(board[i][j] == 'R'){
                row = i;
                col = j;
            }
        }
    }

    for(let i = row; i < 8; i++){
        if(board[i][col] == 'B'){
            break;
        }
        if(board[i][col] == 'p'){
            result++;
            break;
        }
    }

    for(let i = row; i >= 0; i--){
        if(board[i][col] == 'B'){
            break;
        }
        if(board[i][col] == 'p'){
            result++;
            break;
        }
    }

    for(let i = col; i < 8; i++){
        if(board[row][i] == 'B'){
            break;
        }
        if(board[row][i] == 'p'){
            result++;
            break;
        }
    }

    for(let i = col; i >= 0; i--){
        if(board[row][i] == 'B'){
            break;
        }
        if(board[row][i] == 'p'){
            result++;
            break;
        }
    }

    return result;
};
