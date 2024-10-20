/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
    let hash = {};
    let result = "";
    hash['0'] = '0';
    
    for(let i = 0; i <= n; i++){
        if(!hash[`${i}`]){
            result = hash[`${i - 1}`];
            let reverse = "";
            for(let j =0; j < result.length; j++){
                if(result[j] == '0'){
                    reverse += '1';
                } else {
                    reverse += '0';
                }
            }
            reverse = reverse.split('').reverse().join('');
            result += '1' + reverse;
            hash[`${i}`] = result;
        }
    }
    
    return result[k-1];
};

