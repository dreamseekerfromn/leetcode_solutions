/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let hash = {};
    let n = nums.length;
    let index1 = 0;

    for(let i = 0; i < n; i++){
        hash[nums[i]] = (hash[nums[i]] + 1) || 1;
    }

    for(let i = 0; i < 3; i++){
        for(let j = 0; j < hash[i]; j++){
            nums[index1] = i;
            index1++;
        }
    }

    return nums;
};