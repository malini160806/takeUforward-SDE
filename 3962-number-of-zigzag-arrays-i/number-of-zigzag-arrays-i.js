var zigZagArrays = function(n, l, r) {
    const MOD = 1000000007;
    const m = r - l + 1;

    let up = new Array(m).fill(0);
    let down = new Array(m).fill(0);

    // Length = 2
    for (let v = 0; v < m; v++) {
        up[v] = v;             // smaller values before v
        down[v] = m - 1 - v;   // larger values before v
    }

    for (let len = 3; len <= n; len++) {

        let prefixDown = new Array(m + 1).fill(0);
        let prefixUp = new Array(m + 1).fill(0);

        for (let i = 0; i < m; i++) {
            prefixDown[i + 1] = (prefixDown[i] + down[i]) % MOD;
            prefixUp[i + 1] = (prefixUp[i] + up[i]) % MOD;
        }

        let totalUp = prefixUp[m];

        let newUp = new Array(m).fill(0);
        let newDown = new Array(m).fill(0);

        for (let v = 0; v < m; v++) {

            // Previous comparison must be DOWN
            newUp[v] = prefixDown[v];

            // Previous comparison must be UP
            newDown[v] =
                (totalUp - prefixUp[v + 1] + MOD) % MOD;
        }

        up = newUp;
        down = newDown;
    }

    let ans = 0;

    for (let i = 0; i < m; i++) {
        ans = (ans + up[i] + down[i]) % MOD;
    }

    return ans;
};