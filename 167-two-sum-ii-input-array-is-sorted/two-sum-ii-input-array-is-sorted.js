/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target) {
let index1 = 0;
    let index2 = arr.length - 1;
    do{
        let calculation = arr[index1] + arr[index2];
        if(calculation == target){
            return [index1 + 1, index2 + 1];
        } else if (calculation > target){
            index2--;
        } else {
            index1++;
        }
    } while(index1 < index2);
};