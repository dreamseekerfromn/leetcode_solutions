/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    let result = 0;
    let index1 = 0;
    let index2 = 0;

    while(index1 < worker.length){
        let maxProfit = 0;
        for(index2 = 0; index2 < difficulty.length; index2++){
            if(difficulty[index2] <= worker[index1]){
                maxProfit = Math.max(maxProfit, profit[index2]);
            }
        }
        result += maxProfit;
        index1++;
    }
    return result;
};