/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let index1 = 0;
    let index2 = 1;
    while(index1 < nums.length - 1){
        if(nums[index1] != 0){
            index1++;
            index2 = index1 + 1;
        } else {
            if(nums[index2] != 0){
                [nums[index1], nums[index2]] = [nums[index2], nums[index1]]
            } else {
                index2++;
                if(index2 == nums.length){
                    index1++;
                    index2 = index1 + 1;
                }
            }
        }
    }
};