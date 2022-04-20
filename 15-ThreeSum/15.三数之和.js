/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // 总体思路，先给数组排序再用双指针

    // 数组长度判断，小于3的直接返回[]
    if(nums.length<3){
        return [];
    }

    // 数组排序
    nums.sort((a, b) => a-b);

    // 结果集定义
    let list = [];

    // 先用for循环确定三个数中的一个，剩下两个利用双指针进行查找
    for(let i=0;i<nums.length;i++){
        // 首先去重
        if(nums[i] === nums[i-1]){
            continue;
        }

        // 定义双指针，左指针从i+1开始
        let left = i + 1,
            right = nums.length - 1;
        
        while(left < right){
            let sum = nums[i]+nums[left]+nums[right];
            if(sum === 0){
                // 找到一组解后，首先向list中添加，来进行保存
                list.push([nums[i], nums[left], nums[right]]);
    
                // 并且还需要进一步对num[i]固定情况下的其它可能解进行寻找
                // 去重
                // 注意 一定要用while去重
                while(nums[left] == nums[left+1]){
                    left++;
                }
                while(nums[right] == nums[right-1]){
                    right--;
                }

                // 这里进行正常的left，right操作，记得两个值都要改变
                // 因为目前的状况是当前值为一个解，所以双指针都得移动
                left++;
                right--;
    
            }else if(sum < 0){
                // 小于说明值还不够大，让left+1
                left++;
            }else if(sum > 0){
                // 大于说明值过大了，让right-1
                right--;
            }
        }
        
    }

    return list;
};
// @lc code=end

