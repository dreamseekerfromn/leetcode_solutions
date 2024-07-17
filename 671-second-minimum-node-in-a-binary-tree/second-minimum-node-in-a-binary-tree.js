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
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
    let smallest = Infinity;
    let second = Infinity;

    function trav(node){
        if(!node){
            return null;
        }
        if(node.val < smallest){
            smallest = node.val;
        } else if(node.val > smallest && node.val < second){
            second = node.val;
        }

        trav(node.left);
        trav(node.right);
    }

    trav(root);
    return second == Infinity ? -1 : second;
};