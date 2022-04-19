/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

    // 有序列表 + 双指针 实现两数之和
    let left = 0; //头指针
    let right =  numbers.length - 1; //尾指针

    while(left < right){
        let sum = numbers[left] + numbers[right]; // 目前的和
        if(sum === target){ //如果相等则直接返回，记得+1来满足人类习惯
            return [left+1, right+1];
        }else if(sum > target){ // 如果大了就缩小尾指针
            right--;
        }else if(sum < target){ // 如果小了就扩大头指针
            left++;
        }
    }
};
// @lc code=end

