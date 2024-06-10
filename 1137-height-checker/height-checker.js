/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let result = 0;
    let sorted = Array.from(heights);
    sorted = sorted.sort((a,b) => a > b ? 1 : a < b ? -1 : 0);
    for(let i = 0; i < heights.length; i++){
        if(sorted[i] !== heights[i])
            result++;
    }

    return result;
};