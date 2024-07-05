/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    function traversal(head){
        let node = head;
        let prevPosition = -1;
        let currPosition = -1;
        let firstPosition = -1;
        let index = 1;
        let curr = head.next;
        let prev = head;
        let min = Infinity;
        let max = -1;
        while(curr.next){
            //local maxima
            if((curr.val > prev.val && curr.val > curr.next.val) || (curr.val < prev.val && curr.val < curr.next.val)){
                prevPosition = currPosition;
                currPosition = index;
                if(firstPosition == -1){
                    firstPosition = currPosition;
                }
                if(prevPosition != -1){
                    min = Math.min(min, currPosition - prevPosition);
                    max = currPosition - firstPosition;
                }
            }
            prev = prev.next;
            curr = curr.next;
            index++;
        }
        if(min == Infinity || max == -1){
            return [-1, -1];
        }
        return [min, max];
    }

    return traversal(head);
};