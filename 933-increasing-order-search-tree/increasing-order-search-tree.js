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
    let newRoot = new TreeNode();
    let pointer = newRoot;

    function traversal(node){
        if(!node){
            return null;
        }
        traversal(node.left);
        pointer.right = new TreeNode(node.val);
        pointer = pointer.right;
        traversal(node.right);
    }
    
    traversal(root);
    newRoot = newRoot.right;
    return newRoot;
};