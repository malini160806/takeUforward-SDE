/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var gcdValues = function(nums, queries) {
    const MAX = Math.max(...nums);

    // Frequency of each value
    const freq = new Array(MAX + 1).fill(0);
    for (const x of nums) freq[x]++;

    // cnt[g] = numbers divisible by g
    const cnt = new Array(MAX + 1).fill(0);
    for (let g = 1; g <= MAX; g++) {
        for (let j = g; j <= MAX; j += g) {
            cnt[g] += freq[j];
        }
    }

    // exact[g] = pairs whose gcd is exactly g
    const exact = new Array(MAX + 1).fill(0);

    for (let g = MAX; g >= 1; g--) {
        let pairs = cnt[g] * (cnt[g] - 1) / 2;

        for (let j = g + g; j <= MAX; j += g) {
            pairs -= exact[j];
        }

        exact[g] = pairs;
    }

    // Prefix counts
    const gcds = [];
    const prefix = [];

    let total = 0;

    for (let g = 1; g <= MAX; g++) {
        if (exact[g] > 0) {
            total += exact[g];
            gcds.push(g);
            prefix.push(total);
        }
    }

    // Binary search for each query
    const ans = [];

    for (const q of queries) {
        let l = 0;
        let r = prefix.length - 1;

        while (l < r) {
            const mid = (l + r) >> 1;
            if (prefix[mid] > q) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }

        ans.push(gcds[l]);
    }

    return ans;
};