// This is an algorithm that we can perform on arrays, linkedlist and so on when we need to get serach or sort the items in the array that met a certain criteria.
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 1
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== nums[k]){
            k++
        }
    }
    return k
};