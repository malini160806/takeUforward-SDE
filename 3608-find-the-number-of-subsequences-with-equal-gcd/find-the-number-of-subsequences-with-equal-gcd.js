/**
 * @param {number[]} nums
 * @return {number}
 */
var subsequencePairCount = function(nums) {
    const MOD = 1000000007;
    const m = Math.max(...nums);

    let dp = Array.from({ length: m + 1 }, () =>
        Array(m + 1).fill(0)
    );
    dp[0][0] = 1;

    const gcd = (a, b) => {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    };

    for (const x of nums) {
        let next = Array.from({ length: m + 1 }, () =>
            Array(m + 1).fill(0)
        );

        for (let g1 = 0; g1 <= m; g1++) {
            for (let g2 = 0; g2 <= m; g2++) {
                if (dp[g1][g2] === 0) continue;

                const ways = dp[g1][g2];

                // Ignore current number
                next[g1][g2] = (next[g1][g2] + ways) % MOD;

                // Put in first subsequence
                const ng1 = gcd(g1, x);
                next[ng1][g2] = (next[ng1][g2] + ways) % MOD;

                // Put in second subsequence
                const ng2 = gcd(g2, x);
                next[g1][ng2] = (next[g1][ng2] + ways) % MOD;
            }
        }

        dp = next;
    }

    let ans = 0;

    for (let g = 1; g <= m; g++) {
        ans = (ans + dp[g][g]) % MOD;
    }

    return ans;
};