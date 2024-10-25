/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let index1 = 0;
    let index2 = 0;
    let largest = -Infinity
    let total = 0;
    for(index1; index1 < nums.length; index1++){
        if (total < 0){
            total = 0;
        }
        total += nums[index2];
        
        largest = Math.max(largest, total);
        index2++;
        if(index2 == nums.length){
            index1++;
            index2 = index1;
            total = 0;
        }
    }
    return largest
};