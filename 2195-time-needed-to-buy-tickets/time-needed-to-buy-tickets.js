/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let result = 0;
    let require = tickets[k];
    let index = 0;
    do{
        if(tickets[index] > 0){
            tickets[index]--;
            result++;
            if(index == k){
                require--;
            }
        }
        index++;
        if(index >= tickets.length){
            index = 0;
        }
    } while(require > 0)
    return result;
};