/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let mid = Math.floor(nums.length / 2);    
    let left = 0;
    let right = nums.length;
    do{
        if(nums[mid] == target){
            return mid;
        }
        if(nums[mid] < target){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
        mid = Math.floor((right + left)/2);
    } while(left <= right)
    
    return -1;  
};