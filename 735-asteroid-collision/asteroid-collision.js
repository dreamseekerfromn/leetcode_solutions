/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];
    for(let i = 0; i < asteroids.length; i++){
        if(asteroids[i] > 0){
            stack.push(asteroids[i]);
        } 
        else if(stack.at(-1) < 0 || stack.length == 0){
            stack.push(asteroids[i]);
        } else if(Math.abs(asteroids[i]) == Math.abs(stack.at(-1))){
            stack.pop();
        } else {
            while(Math.abs(asteroids[i]) > Math.abs(stack.at(-1)) && stack.at(-1) > 0){
                stack.pop();
            }
            if(stack.length == 0 || (asteroids[i] < 0 && stack.at(-1) < 0)){
                stack.push(asteroids[i]);
            } else if(Math.abs(asteroids[i]) == Math.abs(stack.at(-1))){
                stack.pop();
            }
        }
        
        
    }
    return stack;
};