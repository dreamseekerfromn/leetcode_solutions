/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    let result = 0;
    s = s.split('')
    if(s.length == 1){
        if(s[0] == '1')
            return 0;
    }
    
    while(s.length != 1){
        //console.log(s)
        result++;
        if(s[s.length - 1] == '0'){
            s.pop();
        } else {
            let one = 1;
            let index = s.length - 2;
            s[s.length - 1] = '0'
            while(one == 1 && index >= 0){
                if(s[index] == '0'){
                    s[index] = '1';
                    one--;
                    break;
                } else{
                    s[index] = '0';
                    if(index == 0){
                        s.unshift('1');
                        one--;
                        break;
                    } else {
                        index--;
                    }
                }
            }
        }
    }
    return result;
};
