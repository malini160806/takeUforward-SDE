var maximumLength = function(nums) {
    const freq = new Map();

    for (const x of nums) {
        freq.set(x, (freq.get(x) || 0) + 1);
    }

    let ans = 1;

    // Special case for 1
    if (freq.has(1)) {
        let cnt = freq.get(1);
        if (cnt % 2 === 0) cnt--;
        ans = Math.max(ans, cnt);
    }

    for (const [start] of freq) {
        if (start === 1) continue;

        let cur = start;
        let len = 1;

        while (
            freq.get(cur) >= 2 &&
            freq.has(cur * cur)
        ) {
            len += 2;
            cur = cur * cur;
        }

        // We can always use one occurrence of the last value
        if (freq.has(cur)) {
            ans = Math.max(ans, len);
        } else {
            ans = Math.max(ans, len - 1);
        }
    }

    return ans;
};