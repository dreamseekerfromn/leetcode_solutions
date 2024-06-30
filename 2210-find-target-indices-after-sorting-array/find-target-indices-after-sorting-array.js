/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums.length;
    let foundIndex = -1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] == target){
            foundIndex = mid;
            break;
        } else if(nums[mid] > target){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    if(foundIndex == -1){
        return [];
    }

    left = foundIndex;
    right = foundIndex;

    while(nums[left] == target){
        left--;
    }

    while(nums[right] == target){
        right++;
    }

    let result = [];

    for(let i = left + 1; i < right; i++){
        result.push(i);
    }

    return result;
};