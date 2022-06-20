# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

# You may assume that each input would have exactly one solution, and you may not use the same element twice.

# You can return the answer in any order.

# Example 1:

# Input: nums = [2,7,11,15], target = 9 Output: [0,1] Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]. Example 2:

# Input: nums = [3,2,4], target = 6 Output: [1,2] Example 3:

# Input: nums = [3,3], target = 6 Output: [0,1]

# Constraints:

# 2 <= nums.length <= 104 -109 <= nums[i] <= 109 -109 <= target <= 109 Only one valid answer exists.

nums = [2,7,11,15]

target = 9

## 1. Brute Force 

def twoSum(nums, target):
  for i, a in enumerate(nums, start=0):
    for j, b in enumerate(nums[i+1:], start=0):
      if a+b==target:
        return [i, j+i+1]

print(twoSum(nums, target))

## 2. two pass hashmap solution

def twoSum2(nums, target):
  hashMap = {}
  for index in range(len(nums)):
    hashMap[nums[index]] = index
  for index in range(len(nums)):
    compliment = target - nums[index]
    if compliment in hashMap and hashMap[compliment] != index:
      return [index, hashMap[compliment]]

## 3. one pass hashmap solution

def twoSum3(nums, target):
  hashMap = {}
  for index in range(len(nums)):
    compliment = target - nums[index]
    if compliment in hashMap:
      return [ hashMap[compliment], index]
    hashMap[nums[index]]=index



print(twoSum(nums, target))    