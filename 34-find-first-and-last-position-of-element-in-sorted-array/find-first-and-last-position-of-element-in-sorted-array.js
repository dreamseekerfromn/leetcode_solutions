/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(nums.length == 0){
        return [-1, -1];
    }

    let left = 0;
    let right = nums.length - 1;
    let foundIndex = -1;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        
        if(nums[mid] == target){
            foundIndex = mid;
            break;
        }
        if(nums[mid] > target){
            right = mid - 1;
        } else if(nums[mid] < target){
            left = mid + 1;
        }
    }

    if(foundIndex < 0){
        return [-1, -1];
    }

    left = foundIndex;
    right = foundIndex;

    while(nums[left] == target){
        left--;
    }

    while(nums[right] == target){
        right++;
    }

    return [left + 1, right - 1];
};