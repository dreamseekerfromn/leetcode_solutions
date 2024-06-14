/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
    nums.sort((a,b) => a - b);
    let result = 0;

    for(let i = 1; i < nums.length; i++){
        if(nums[i] == nums[i - 1]){
            nums[i]++;
            result++;
        } else if(nums[i] < nums[i - 1]){
            let temp = Math.abs(nums[i] - nums[i - 1]);
            nums[i] += temp + 1;
            result += temp + 1;
        }
    }
    return result;
};