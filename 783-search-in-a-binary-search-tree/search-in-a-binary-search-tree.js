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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let trav = function(node){
        if(!node){
            return null;
        }
        if(node.val == val){
            return node;
        }
        return trav(node.left) || trav(node.right);
    }
    return trav(root);
};