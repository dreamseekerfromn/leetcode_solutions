/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    function check(row, col, letter, board){
        //right
        let horizontal = 0;
        for(let i = 0; i < 3; i++){
            if(board[i][col] == letter)
                horizontal++;
        }
        if(horizontal == 3){
            return letter;
        }

        let vertical = 0;
        for(let i = 0; i < 3; i++){
            if(board[row][i] == letter)
                vertical++;
        }
        if(vertical == 3){
            return letter;
        }

        let diagonal1 = 0;
        let diagonal2 = 0;
        for(let i = 0; i < 3; i++){
            if(board[i][i] == letter){
                diagonal1++;
            }
            if(board[i][2-i] == letter){
                diagonal2++;
            }
        }

        if(diagonal1 == 3 || diagonal2 == 3){
            return letter;
        }
        
        return (moves.length == 9 ? 'Draw' : 'Pending');
        
    }

    if(moves.length < 3){
        return 'Pending'
    }

    let board = [['.','.','.'],['.','.','.'],['.','.','.']]
    let turn = 1;
    for(let i = 0; i < moves.length; i++){
        if(turn % 2 != 0)
            board[moves[i][0]][moves[i][1]] = 'A';
        else
            board[moves[i][0]][moves[i][1]] = 'B';
        turn++;
    };

    return check(moves[moves.length-1][0], moves[moves.length-1][1],((turn - 1) % 2 != 0 ? 'A' : 'B'), board);
};
