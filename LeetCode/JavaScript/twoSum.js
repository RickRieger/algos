// LeetCode Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9 Output: [0,1] Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]. Example 2:

// Input: nums = [3,2,4], target = 6 Output: [1,2] Example 3:

// Input: nums = [3,3], target = 6 Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104 -109 <= nums[i] <= 109 -109 <= target <= 109 Only one valid answer exists.

const nums = [2,7,11,15]

const target = 9

// 1. Brute Force 

const twoSum = function(nums, target) {
    for(let i=0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if (nums[i] + nums[j] === target){
                return [i, j]
            }else{
                continue
            }
        }
    }
}


// 2. two pass hashmap solution

const twoSum2 = (nums, target) =>{
  let hashMap = {}
    for(let i=0; i < nums.length; i++){
      hashMap[nums[i]] = i
        }
     for(let i=0; i < nums.length; i++){
       let compliment = target - nums[i]
       if(hashMap[compliment] && hashMap[compliment] !== i){
         return [i, hashMap[compliment]]
       }
    }
}


// 3. one pass hashmap solution 

const twoSum3 = (nums, target) =>{
  let hashMap = {}
    for(let i=0; i < nums.length; i++){
      let compliment = target - nums[i]
      if(compliment in hashMap){
        return [i, hashMap[compliment]]
      }
      hashMap[nums[i]]=i
    }
}



// 4. one pass hash map alt.

const twoSum3alt = (nums, target) =>{
  let storage = {}
  for(let[index, num] of nums.entries()){
    if(storage[num] !== undefined) return [storage[num], index]
    storage[target - num] = index

  }
}

console.log(twoSum(nums, target)

// result = [0, 1]