/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false;
    let hash = new Array(26).fill(0);
    let flag = true;
    for(let i of s1){
        hash[i.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for(let i = 0; i < s2.length; i++){
        let temp = new Array(26).fill(0);
        flag = true;
        for(let j = i; j < i + s1.length; j++){
            temp[String(s2[j]).charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        
        for(let k = 0; k < temp.length; k++){
            if(temp[k] != hash[k]){
                flag = false;
                break;
            }
        }
        if(flag) return true;
    }
    return false;
};