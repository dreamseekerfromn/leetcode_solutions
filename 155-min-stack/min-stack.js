
var MinStack = function() {
    this.arr = [];
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.arr.push(val);
    this.minStack.length == 0 ? this.minStack.push(val) : this.minStack.push(Math.min(this.minStack.at(-1), val));

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.minStack.pop();
    return this.arr.pop();

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arr.at(-1);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack.at(-1);
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */