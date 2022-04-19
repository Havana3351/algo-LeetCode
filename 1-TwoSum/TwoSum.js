// 暴力解法
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(nums[i]+nums[j]==target && i!=j){
                return [i,j];
            }
        }
    }
};

// 优化后解法
var twoSum = function(nums, target) {
    let obj = {};
    for(let i=0;i<nums.length;i++){
        let num = nums[i];
        if(num in obj){
            return [i,obj[num]]
        }else{
            let n = target - num;
            obj[n] = i;
        }
    }
};