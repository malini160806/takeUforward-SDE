/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumAndMultiply = function (s, queries) {
    const MOD = 1000000007n;
    const n = s.length;

    const pow10 = new Array(n + 1).fill(0n);
    const invPow10 = new Array(n + 1).fill(0n);
    const prefixHash = new Array(n + 1).fill(0n);
    const prefixSum = new Array(n + 1).fill(0n);
    const prefixCnt = new Array(n + 1).fill(0);

    const modPow = (a, b) => {
        let res = 1n;
        while (b > 0n) {
            if (b & 1n) res = (res * a) % MOD;
            a = (a * a) % MOD;
            b >>= 1n;
        }
        return res;
    };

    pow10[0] = 1n;
    invPow10[0] = 1n;

    const inv10 = modPow(10n, MOD - 2n);

    for (let i = 1; i <= n; i++) {
        pow10[i] = (pow10[i - 1] * 10n) % MOD;
        invPow10[i] = (invPow10[i - 1] * inv10) % MOD;
    }

    for (let i = 0; i < n; i++) {
        const d = s.charCodeAt(i) - 48;

        prefixSum[i + 1] = prefixSum[i];
        prefixCnt[i + 1] = prefixCnt[i];
        prefixHash[i + 1] = prefixHash[i];

        if (d !== 0) {
            prefixSum[i + 1] += BigInt(d);
            prefixCnt[i + 1]++;

            prefixHash[i + 1] =
                (prefixHash[i] * 10n + BigInt(d)) % MOD;
        }
    }

    const ans = [];

    for (const [l, r] of queries) {

        const sum = prefixSum[r + 1] - prefixSum[l];

        const cnt = prefixCnt[r + 1] - prefixCnt[l];

        if (cnt === 0) {
            ans.push(0);
            continue;
        }

        let x =
            (prefixHash[r + 1] -
                (prefixHash[l] * pow10[cnt]) % MOD +
                MOD) %
            MOD;

        ans.push(Number((x * sum) % MOD));
    }

    return ans;
};