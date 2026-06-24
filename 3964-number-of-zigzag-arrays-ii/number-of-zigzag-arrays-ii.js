var zigZagArrays = function(n, l, r) {
    const MOD = 1000000007n;
    const m = r - l + 1;

    if (n === 1) return m;

    const size = 2 * m;

    function matMul(A, B) {
        const C = Array.from({ length: size }, () =>
            Array(size).fill(0n)
        );

        for (let i = 0; i < size; i++) {
            for (let k = 0; k < size; k++) {
                if (A[i][k] === 0n) continue;

                for (let j = 0; j < size; j++) {
                    if (B[k][j] === 0n) continue;

                    C[i][j] =
                        (C[i][j] + A[i][k] * B[k][j]) % MOD;
                }
            }
        }

        return C;
    }

    function matPow(M, p) {
        let R = Array.from({ length: size }, (_, i) =>
            Array.from({ length: size }, (_, j) =>
                i === j ? 1n : 0n
            )
        );

        while (p > 0) {
            if (p & 1) R = matMul(R, M);

            M = matMul(M, M);
            p >>= 1;
        }

        return R;
    }

    const T = Array.from({ length: size }, () =>
        Array(size).fill(0n)
    );

    // up[i] = state i
    // down[i] = state m+i

    for (let i = 0; i < m; i++) {

        // up[i] <- sum down[j] for j < i
        for (let j = 0; j < i; j++) {
            T[i][m + j] = 1n;
        }

        // down[i] <- sum up[j] for j > i
        for (let j = i + 1; j < m; j++) {
            T[m + i][j] = 1n;
        }
    }

    let base = Array(size).fill(0n);

    for (let i = 0; i < m; i++) {
        base[i] = BigInt(i);
        base[m + i] = BigInt(m - 1 - i);
    }

    if (n === 2) {
        let ans = 0n;
        for (let x of base) {
            ans = (ans + x) % MOD;
        }
        return Number(ans);
    }

    const P = matPow(T, n - 2);

    let ans = 0n;

    for (let i = 0; i < size; i++) {
        let cur = 0n;

        for (let j = 0; j < size; j++) {
            cur =
                (cur + P[i][j] * base[j]) % MOD;
        }

        ans = (ans + cur) % MOD;
    }

    return Number(ans);
};