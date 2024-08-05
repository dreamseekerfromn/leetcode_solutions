/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length == 1){
        return nums[0]
    }
    
    let arr = new Array(nums.length).fill(0);
    arr[nums.length - 1] = nums.at(-1);
    arr[nums.length - 2] = nums.at(-2);
    for(let i = nums.length - 3; i >= 0; i--){
        if(i + 3 <= nums.length - 1){
            arr[i] = nums[i] + Math.max(arr[i + 2], arr[i + 3])
        } else {
            arr[i] = nums[i] + arr[i + 2];
        }
    }

    return Math.max(arr[0], arr[1]);
};