/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */

 
var findMaximizedCapital = function(k, w, profits, capital) {
    let list = capital.map((a, index) => [a, profits[index]]);
    list.sort((a,b) => a[1] == b[1] ? a[0] - b[0] : -(a[1] - b[1]));
    //console.log(list);
    let index = 0;
    let counter = 0;
    let curr = w;
    if(k == profits.length){
        if(Math.max(...capital) <= w){
            let sum = w;
            for(let cap of profits){
                sum += cap;
            }
            
            return sum;
        }
    }
    while(counter < k){
        let flag = false;
        let j = 0;
        
        for(j; j < list.length; j++){
            if(list[j][0] <= curr){
                
                list[j][0] = Infinity;
                curr += list[j][1];
                counter++;
                flag = true;
                //console.log(curr)
                
                break;
                
            }
        }
        if(!flag){
            break;
        }
    }
    
    return curr;
};