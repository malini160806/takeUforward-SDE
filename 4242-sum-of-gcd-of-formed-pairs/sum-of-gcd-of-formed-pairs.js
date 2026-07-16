/**
 * @param {number[]} nums
 * @return {number}
 */
var gcdSum = function(nums) {

    const gcd = (a, b) => {
        while (b !== 0) {
            let temp = a % b;
            a = b;
            b = temp;
        }
        return a;
    };

    const prefixGcd = [];
    let maxVal = 0;

    for (let num of nums) {
        maxVal = Math.max(maxVal, num);
        prefixGcd.push(gcd(num, maxVal));
    }

    prefixGcd.sort((a, b) => a - b);

    let left = 0;
    let right = prefixGcd.length - 1;
    let ans = 0;

    while (left < right) {
        ans += gcd(prefixGcd[left], prefixGcd[right]);
        left++;
        right--;
    }

    return ans;
};