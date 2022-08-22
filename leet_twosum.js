/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


/**
 * 
 * 
 * https://leetcode.com/problems/two-sum/
ok how do you solve this as a human
start w first elem, try each other elem until it adds up
if nothing works, move to the next one

store left val
loop through the array to find match
if none, incremenet left val (so, nested loop)
*/
var twoSum = function(nums, target) {
    for (let i=0; i < nums.length; i++) {
        let left = nums[i]
        for (let j=i+1; j < nums.length; j++) {
            if (left + nums[j] == target) {
                return [i, j]
            }
        }
    }
    return 0;
};