/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let hash1 = {};
    let hash2 = {};
    let arr = [];

    for(let i = 0; i < nums1.length; i++){
        hash1[nums1[i]] = (hash1[nums1[i]] + 1) || 1;
    }

    for(let i = 0; i < nums2.length; i++){
        hash2[nums2[i]] = (hash2[nums2[i]] + 1) || 1;
    }

    for(let j in hash1){
        if(hash2[j]){
            let diff = Math.min(hash1[j], hash2[j]);
            for(let k = 0; k < diff; k++){
                arr.push(j);
            }
        }
    }

    return arr;
};