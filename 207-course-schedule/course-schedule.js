/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {

    const graph = Array.from({ length: numCourses }, () => []);
    const indegree = new Array(numCourses).fill(0);

    // Build graph
    for (const [course, pre] of prerequisites) {
        graph[pre].push(course);
        indegree[course]++;
    }

    // Queue for courses with no prerequisites
    const queue = [];

    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    let completed = 0;
    let front = 0;

    while (front < queue.length) {
        const node = queue[front++];
        completed++;

        for (const next of graph[node]) {
            indegree[next]--;

            if (indegree[next] === 0) {
                queue.push(next);
            }
        }
    }

    return completed === numCourses;
};