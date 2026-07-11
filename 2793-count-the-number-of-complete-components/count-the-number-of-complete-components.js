/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function(n, edges) {

    const graph = Array.from({ length: n }, () => []);

    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    const visited = new Array(n).fill(false);
    let ans = 0;

    for (let i = 0; i < n; i++) {

        if (visited[i]) continue;

        const stack = [i];
        const component = [];

        visited[i] = true;

        while (stack.length) {

            const node = stack.pop();
            component.push(node);

            for (const nei of graph[node]) {

                if (!visited[nei]) {
                    visited[nei] = true;
                    stack.push(nei);
                }
            }
        }

        const size = component.length;
        let complete = true;

        for (const node of component) {

            if (graph[node].length !== size - 1) {
                complete = false;
                break;
            }
        }

        if (complete) ans++;
    }

    return ans;
};