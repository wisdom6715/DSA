var twoSum = function(nums, target) {
    const factors = []
    for (let x = 0; x < nums.length; x++) {
        for (let y = x + 1; y < nums.length; y++) {
            // check if the two elements add up to the target
            if (nums[x] + nums[y] === target) {
                // return their indices
                factors.push(x, y);
                return factors;
            }
        }
    }
    // Return empty array if no pair found
    return factors;
};

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));
///my idea about closures 
// closures are like property of a variable that enables it to be accessed in it's inner scope or function