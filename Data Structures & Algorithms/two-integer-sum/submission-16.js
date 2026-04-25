class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
      const hash={}
      for(let i in nums){
        const complement = target - nums[i]
        if(hash[complement] != undefined){
          return [parseInt(hash[complement]), parseInt(i)]
        }
        hash[nums[i]]= i
      }
      return []
    }
}
