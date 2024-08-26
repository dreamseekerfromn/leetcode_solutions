/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    let result = [];

    function traversal(node){
        if(!node){
            return null;
        }

        if(node.children.length > 0){
            for(let i of node.children){
                traversal(i);
            }
        }

        result.push(node.val);
    }

    traversal(root);
    return result;
};