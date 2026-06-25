var nextGreaterElement = function(nums1, nums2) {
    let stack = [];
    let map = new Map();

    for (let i = nums2.length - 1; i >= 0; i--) {
        while (stack.length && stack[stack.length - 1] <= nums2[i]) {
            stack.pop();
        }

        map.set(
            nums2[i],
            stack.length ? stack[stack.length - 1] : -1
        );

        stack.push(nums2[i]);
    }

    let ans = [];

    for (let num of nums1) {
        ans.push(map.get(num));
    }

    return ans;
};