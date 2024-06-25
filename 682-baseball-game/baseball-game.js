/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let record = [];
    for(let i = 0; i < operations.length; i++){
        console.log(record)
        if(operations[i] == 'D'){
            record.push(record.at(-1) * 2);
        } else if(operations[i] == 'C'){
            record.pop();
        } else if(operations[i] == '+'){
            let num1 = record.at(-1);
            let num2 = record.at(-2);
            record.push(num1 + num2);
        } else {
            record.push(Number(operations[i]));
        }
    }
    if(record.length == 0){
        return 0;
    }

    let sum = 0;
    for(let i = 0; i < record.length; i++){
        sum += record[i];
    }
    return sum;
};