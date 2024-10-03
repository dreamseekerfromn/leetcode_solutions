/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let sorted = [...arr];
    let result = [];
    let map = new Map();
    let currentRank = 1;
    sorted.sort((a,b) => a - b);
    for(let i of sorted){
        if(!map.has(i)){
            map.set(i, currentRank);
            currentRank++;
        }
    }
    for(let i = 0; i < arr.length; i++){
        result.push(map.get(arr[i]));
    }
    return result;
};