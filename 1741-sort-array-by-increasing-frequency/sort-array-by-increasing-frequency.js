/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let frequency = new Array(201).fill(0);
    let result = []

    for(let i of nums){
        frequency[i + 100]++;
    }
    frequency = frequency.map((elem, index) => [index - 100, elem]);
    frequency = frequency.sort((a, b) => a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : a[0] < b[0] ? 1 : -1);
    
    for(let j = 0; j < frequency.length; j++){
        if(frequency[j][1] == 0)
            continue;
        else{
            for(let k = 0; k < frequency[j][1]; k++){
                result.push(frequency[j][0]);
            }
        }
    }

    return result;
};