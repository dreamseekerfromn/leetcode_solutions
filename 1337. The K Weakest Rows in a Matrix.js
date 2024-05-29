/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let hash = {};
    for(let i = 0; i < mat.length; i++){
        hash[i] = 0;
        
        for(let j = 0; j < mat[i].length; j++){
                
            if(mat[i][j] == 1)
                hash[i]++;
        }
    }

    let arr = Object.keys(hash).map(key => [key, hash[key]]).sort((a, b) => a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : Number(a[0] - b[0]));
    let result = [];
    for(let i = 0; i < k; i++){
        result.push(Number(arr[i][0]));
    }
    return result;
};
