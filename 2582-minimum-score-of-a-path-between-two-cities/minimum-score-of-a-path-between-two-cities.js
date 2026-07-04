var minScore = function(n, roads) {
    const graph = Array.from({ length: n + 1 }, () => []);

    for (const [u, v, d] of roads) {
        graph[u].push([v, d]);
        graph[v].push([u, d]);
    }

    const visited = new Array(n + 1).fill(false);
    let ans = Infinity;

    function dfs(node) {
        visited[node] = true;

        for (const [next, dist] of graph[node]) {
            ans = Math.min(ans, dist);

            if (!visited[next]) {
                dfs(next);
            }
        }
    }

    dfs(1);

    return ans;
};