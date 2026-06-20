var maxBuilding = function(n, restrictions) {

    restrictions.push([1, 0]);

    if (restrictions[restrictions.length - 1][0] !== n) {
        restrictions.push([n, n - 1]);
    }

    restrictions.sort((a, b) => a[0] - b[0]);

    let m = restrictions.length;

    // Left to Right
    for (let i = 1; i < m; i++) {
        restrictions[i][1] = Math.min(
            restrictions[i][1],
            restrictions[i - 1][1] +
            (restrictions[i][0] - restrictions[i - 1][0])
        );
    }

    // Right to Left
    for (let i = m - 2; i >= 0; i--) {
        restrictions[i][1] = Math.min(
            restrictions[i][1],
            restrictions[i + 1][1] +
            (restrictions[i + 1][0] - restrictions[i][0])
        );
    }

    let ans = 0;

    for (let i = 1; i < m; i++) {

        let x1 = restrictions[i - 1][0];
        let h1 = restrictions[i - 1][1];

        let x2 = restrictions[i][0];
        let h2 = restrictions[i][1];

        let dist = x2 - x1;

        let peak = Math.floor(
            (h1 + h2 + dist) / 2
        );

        ans = Math.max(ans, peak);
    }

    return ans;
};