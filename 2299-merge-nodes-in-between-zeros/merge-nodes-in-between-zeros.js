/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
    function traversal(head){
        if(!head){
            return null;
        }
        let node = head;
        let sum = 0;
        while(node.next){
            if(node.next.val != 0){
                node.val += node.next.val;
                node.next = node.next.next;
                continue;
            } else {
                if(!node.next.next){
                    node.next = null;
                    break;
                }
                node = node.next;
                
            }
        }
        return head;
    }
    return traversal(head);
};