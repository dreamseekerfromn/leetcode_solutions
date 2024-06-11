/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let result = [];
    let hash = {};
    
    for(let i of arr1){
        hash[i] = (hash[i] + 1) || 1;
    }

    for(let j of arr2){
        for(let k = 0; k < hash[j]; k++){
            result.push(j);
        }
        delete hash[j];
    }

    let keys = Object.keys(hash).sort((a, b) => a - b);

    for(let l of keys){
        for(let m = 0; m < hash[l]; m++){
            result.push(l)
        }
    }
    return result;
};