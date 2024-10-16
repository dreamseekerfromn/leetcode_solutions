/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(heights) {
    let index1 = 0;
    let index2 = heights.length - 1;
    let result = 0;
    while(index1 < index2){
        let height = Math.min(heights[index1], heights[index2]);
        let width = index2 - index1;
        let area = height * width;
        result = Math.max(result, area);
        if(heights[index1] < heights[index2]){
            index1++;
        } else {
            index2--;
        }
    }
    return result;
};