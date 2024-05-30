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

    let arr = Object.keys(hash).sort((a, b) => hash[a] > hash[b] ? 1 : hash[a] < hash[b] ? -1 : 0);
    let result = [];
    for(let i = 0; i < k; i++){
        result.push(arr[i]);
    }
    return result;
};

