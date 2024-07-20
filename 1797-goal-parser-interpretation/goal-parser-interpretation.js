/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let stack = [];
    for(let i = 0; i < command.length; i++){
        if(stack.at(-1) == '('){
            if(command[i] == ')'){
                stack.pop();
                stack.push('o');
            } else {
                stack.pop();
                stack.push(command[i]);
            }
        } else if(command[i] == ')'){
            continue;
        } else {
            stack.push(command[i]);
        }
    }
    return stack.join('');
};