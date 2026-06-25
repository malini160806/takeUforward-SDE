var countMajoritySubarrays = function(nums, target) {
    const n = nums.length;
    let ans = 0;

    for (let i = 0; i < n; i++) {
        let targetCount = 0;

        for (let j = i; j < n; j++) {
            if (nums[j] === target) targetCount++;

            const len = j - i + 1;

            if (targetCount * 2 > len) {
                ans++;
            }
        }
    }

    return ans;
};