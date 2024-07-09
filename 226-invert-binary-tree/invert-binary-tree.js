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
var invertTree = function(root) {
    function traversal(node){
        if(!node){
            return null;
        }
        let tempLeft = node.left;
        node.left = node.right;
        node.right = tempLeft;
        traversal(node.left);
        traversal(node.right);
        return node;
    }
    return traversal(root);
};