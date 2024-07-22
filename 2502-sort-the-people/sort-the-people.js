/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    names = names.map((a, index) => [a, heights[index]]).sort((a, b) => b[1] - a[1]);
    return names.map(a => a[0])
};