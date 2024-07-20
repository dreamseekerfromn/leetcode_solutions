/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let arr = [];

    function traversal(node){
        if(!node)
            return null;
        arr.push(node.val);
        traversal(node.left);
        traversal(node.right);
    }

    traversal(root);

    arr.sort((a, b) => a - b);
    
    return arr[k - 1];
};