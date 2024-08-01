/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let result = 0;
    for(let i of details){
        let temp = i.at(-4) + i.at(-3);
        if(parseInt(temp) > 60){
            result++;
        }
    }
    return result;
};