/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let set = new Set();
    let missing = -1;
    let duplicated = -1;
    let found = false;

    for(let i = 0; i < nums.length; i++){
        if(set.has(nums[i])){
            duplicated = nums[i];
            continue;
        }
        
        set.add(nums[i]);
    }

    for(let i = 1; i < nums.length + 1; i++){
        if(!set.has(i)){
            return [duplicated, i];
        }
    }
    return [];
};