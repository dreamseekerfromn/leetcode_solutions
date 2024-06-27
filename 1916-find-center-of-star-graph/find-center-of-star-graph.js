/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let hash = {};
    const centerNode = edges.length;
    for(let i = 0; i < edges.length; i++){
        hash[edges[i][0]] = (hash[edges[i][0]] + 1) || 1;
        hash[edges[i][1]] = (hash[edges[i][1]] + 1) || 1;
    }

    for(let j in hash){
        if(hash[j] == centerNode){
            return j;
        }
    }
};