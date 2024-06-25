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
            let num1 = record[record.length - 1];
            let num2 = record[record.length - 2];
            record.push(num1 + num2);
        } else {
            record.push(Number(operations[i]));
        }
    }
    
    return record.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};