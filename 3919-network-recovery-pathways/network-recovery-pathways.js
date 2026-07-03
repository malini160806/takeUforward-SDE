var findMaxPathScore = function(edges, online, k) {
    const n = online.length;

    const graph = Array.from({ length: n }, () => []);
    const indegree = new Array(n).fill(0);

    let maxEdge = 0;

    for (const [u, v, w] of edges) {
        graph[u].push([v, w]);
        indegree[v]++;
        maxEdge = Math.max(maxEdge, w);
    }

    const topo = [];
    const queue = [];

    const deg = indegree.slice();
    for (let i = 0; i < n; i++) {
        if (deg[i] === 0) queue.push(i);
    }

    while (queue.length) {
        const u = queue.shift();
        topo.push(u);

        for (const [v] of graph[u]) {
            deg[v]--;
            if (deg[v] === 0) queue.push(v);
        }
    }

    function check(limit) {
        const INF = Number.MAX_SAFE_INTEGER;
        const dp = new Array(n).fill(INF);
        dp[0] = 0;

        for (const u of topo) {
            if (dp[u] === INF) continue;

            for (const [v, cost] of graph[u]) {

                if (cost < limit) continue;

                if (v !== n - 1 && !online[v]) continue;

                if (dp[u] + cost < dp[v]) {
                    dp[v] = dp[u] + cost;
                }
            }
        }

        return dp[n - 1] <= k;
    }

    let left = 0;
    let right = maxEdge;
    let ans = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (check(mid)) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans;
};