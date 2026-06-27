var orangesRotting = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    const queue = [];
    let fresh = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            } else if (grid[i][j] === 1) {
                fresh++;
            }
        }
    }

    if (fresh === 0) return 0;

    let minutes = 0;
    let front = 0;

    const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];

    while (front < queue.length) {
        let size = queue.length - front;
        let changed = false;

        while (size--) {
            const [x, y] = queue[front++];

            for (const [dx, dy] of dirs) {
                const nx = x + dx;
                const ny = y + dy;

                if (
                    nx >= 0 &&
                    ny >= 0 &&
                    nx < rows &&
                    ny < cols &&
                    grid[nx][ny] === 1
                ) {
                    grid[nx][ny] = 2;
                    fresh--;
                    changed = true;
                    queue.push([nx, ny]);
                }
            }
        }

        if (changed) minutes++;
    }

    return fresh === 0 ? minutes : -1;
};