// This is an algorithm that we can perform on arrays, linkedlist and so on when we need to get serach or sort the items in the array that met a certain criteria.
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0
    let uniqueSet = new Set();
    while (k < nums.length) {
        if(!uniqueSet.has(nums[k])) {
            uniqueSet.add(nums[k]); 
            k++;
        }
    }
    return uniqueSet.size;
};
removeDuplicates([1, 1, 2])

const twoSums = (nums, target)=>{
    let i = 0
    let j = nums.length - 1;
    while(i < nums.length){
        if(nums[i] + nums[j] > target){
            // nums[i ] + nums[j] != target
            j--;
        }else if(nums[i ] + nums[j] < target){
            // nums[i ] + nums[j] < target
            i++;
        }else{
            nums[i ] + nums[j] == target
            return [i, j]
        }
    }
}

twoSums([2, 7, 11, 15], 9)