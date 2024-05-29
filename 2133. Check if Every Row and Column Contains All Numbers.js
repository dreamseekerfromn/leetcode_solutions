/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    //speed O(n^2)

    //since we have to chk all the tiles anyway, we need 2 for loops (or 2 nested loops)
    for(let i = 0; i < matrix.length; i++){
        //declare vars, since we have to chk that row & col have all the integer from 1 to n, 
        //Set is good choice for this problem.
        // some other languages that don't have Set as a built-in function or data type, we should use array
        // or other to chk the uniqueness.
        let col = new Set(); // <====it can have no duplicated value. thats why we should use set.
        let row = new Set();

        for(let j = 0; j < matrix.length; j++){
            console.log(`current col is ${j},${i}`)
            console.log(`current row is ${i},${j}`)
            //chk the sets of column & row have that number.
            //if either one has the number, return false immediately.
            if(col.has(matrix[j][i]) || row.has(matrix[i][j]))
                return false;
            
            //else...add that number
            col.add(matrix[j][i]);
            row.add(matrix[i][j]);
        } //end of 2nd loop

    }//end of 1st loop

    return true;
};
