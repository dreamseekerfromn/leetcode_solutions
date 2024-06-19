/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1;
        let right = n;
        let mid = Math.floor((left + right) / 2);
        let answer = -1;
        while(left <= right){
            if(isBadVersion(mid)){
                answer = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
            mid = Math.floor((left + right) / 2);
        }
        return answer;
    };
};