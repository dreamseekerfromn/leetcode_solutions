/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
bool evaluateTree(struct TreeNode* root) {
    if(root->val == 0){
        return false;
    }
    if(root->val == 1){
        return true;
    } else {
        if(root->val == 2){
            return evaluateTree(root->left) || evaluateTree(root->right);
        } else {
            return evaluateTree(root->left) && evaluateTree(root->right);
        }
    }
}