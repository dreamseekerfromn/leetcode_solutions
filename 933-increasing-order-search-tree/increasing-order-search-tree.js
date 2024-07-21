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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let stack = [];
    function traversal(node){
        if(!node){
            return null;
        }
        traversal(node.left);
        stack.push(node.val);
        traversal(node.right);
    }
    
    traversal(root);

    let result = new TreeNode(stack.shift());
    let branch = result;
    while(stack.length){
        branch.right = new TreeNode(stack.shift());
        branch = branch.right;
    }
    console.log(result)
    return result;
};