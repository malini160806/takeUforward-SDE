var solveNQueens = function(n) {

    let result = [];
    let board = Array(n).fill().map(() => Array(n).fill('.'));

    let cols = new Set();
    let diag1 = new Set(); // row - col
    let diag2 = new Set(); // row + col

    function backtrack(row) {

        if (row === n) {
            result.push(board.map(r => r.join("")));
            return;
        }

        for (let col = 0; col < n; col++) {

            if (
                cols.has(col) ||
                diag1.has(row - col) ||
                diag2.has(row + col)
            ) {
                continue;
            }

            cols.add(col);
            diag1.add(row - col);
            diag2.add(row + col);

            board[row][col] = 'Q';

            backtrack(row + 1);

            board[row][col] = '.';

            cols.delete(col);
            diag1.delete(row - col);
            diag2.delete(row + col);
        }
    }

    backtrack(0);

    return result;
};