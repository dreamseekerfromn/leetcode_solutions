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
 * @return {boolean}
 */
var evaluateTree = function(root) {
    function traversal(node){
        if(node.val == 0){
            return false;
        } else if(node.val == 1){
            return true;
        } else {
            if(node.val == 2){
                return traversal(node.left) || traversal(node.right);
            } else if(node.val == 3){
                return traversal(node.left) && traversal(node.right);
            }
        }
    }

    return traversal(root);
};