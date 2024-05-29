/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let subBox = [[new Set(),new Set(),new Set()],[new Set(),new Set(),new Set()],[new Set(),new Set(),new Set()]]
    let map1 = new Map();
    map1.set(0, 0);
    map1.set(1, 0);
    map1.set(2, 0);
    map1.set(3, 1);
    map1.set(4, 1);
    map1.set(5, 1);
    map1.set(6, 2);
    map1.set(7, 2);
    map1.set(8, 2);

    for(let i = 0; i < board.length; i++){
        let row = new Set();
        let col = new Set();
        for(let j = 0; j < board[i].length; j++){
            if(subBox[map1.get(i)][map1.get(j)].has(board[i][j]))
                return false;
                
            if(row.has(board[i][j]) || col.has(board[j][i])){
                return false;
            }
            
            if(board[i][j] != '.'){
                row.add(board[i][j]);
                subBox[map1.get(i)][map1.get(j)].add(board[i][j]);
            }
            if(board[j][i] != '.'){
                col.add(board[j][i]);
                //subBox[map1.get(j)][map1.get(i)].add(board[j][i])
            }
        }
    }
    return true;
};
