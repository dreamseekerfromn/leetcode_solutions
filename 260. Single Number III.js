/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let hash = {};
    let result = [];
    for(let i of nums){
        hash[i] = (hash[i] + 1) || 1;
    }
    for(let j in hash){
        if(hash[j] == 1){
            result.push(Number(j));
        }
    }
    return result;
};
