/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let result = new Array(cost.length).fill(0)

    result[cost.length - 1] = cost.at(-1);
    result[cost.length - 2] = cost.at(-2)

    for(let i = cost.length - 3; i >= 0; i--){
        result[i] = cost[i] + Math.min(result[i + 1], result[i + 2]);
    }

    return Math.min(result[0], result[1]);
};