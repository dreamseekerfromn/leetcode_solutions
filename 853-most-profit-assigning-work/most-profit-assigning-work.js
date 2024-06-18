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
    let arr = difficulty.map((a,i) => [a, profit[i]]);
    arr.sort((a,b) => a[1] > b[1] ? -1 : a[1] < b[1] ? 1 : a[0] - b[0]);
    while(index1 < worker.length){
        for(index2 = 0; index2 < arr.length; index2++){
            if(arr[index2][0] <= worker[index1]){
                result += arr[index2][1];
                break;
            }
        }
        index1++;
    }
    return result;
};