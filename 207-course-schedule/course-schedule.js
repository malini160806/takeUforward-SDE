/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {

    const adj = Array.from({ length: numCourses }, () => []);
    const indegree = new Array(numCourses).fill(0);

    for (const [course, pre] of prerequisites) {
        adj[pre].push(course);
        indegree[course]++;
    }

    const queue = [];

    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    let count = 0;

    while (queue.length) {
        const node = queue.shift();
        count++;

        for (const nei of adj[node]) {
            indegree[nei]--;

            if (indegree[nei] === 0) {
                queue.push(nei);
            }
        }
    }

    return count === numCourses;
};