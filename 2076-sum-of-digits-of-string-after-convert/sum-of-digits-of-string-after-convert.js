/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let converted = "";
    for(let i = 0; i < s.length; i++){
        converted += String(s.charCodeAt(i) - 'a'.charCodeAt(0) + 1);
    }
    
    let temp = 0;
    for(let j = 0; j < k; j++){
        temp = 0;
        for(let k of converted){
            temp += Number(k);
        }
        converted = String(temp);
    }

    return temp;
};