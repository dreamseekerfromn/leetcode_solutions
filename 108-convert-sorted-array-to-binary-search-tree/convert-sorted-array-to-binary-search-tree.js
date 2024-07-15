/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    //to terminate recursion;
    if(nums.length == 0){
        return null;
    }
    if(nums.length == 1){
        return new TreeNode(nums[0]);
    }

    //since the problem asks "balanced", we should use the centered index and the element as the root(also branchs)
    const mid = Math.floor(nums.length/2)
    let t = new TreeNode(nums[mid]);

    t.left = sortedArrayToBST(nums.splice(0,mid));
    t.right = sortedArrayToBST(nums.splice(1,nums.length));
    return t;
};