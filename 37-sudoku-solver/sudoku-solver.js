var solveSudoku = function(board) {

    function isValid(row, col, ch) {

        for (let i = 0; i < 9; i++) {

            if (board[row][i] === ch) return false;

            if (board[i][col] === ch) return false;

            let r = 3 * Math.floor(row / 3) + Math.floor(i / 3);
            let c = 3 * Math.floor(col / 3) + (i % 3);

            if (board[r][c] === ch) return false;
        }

        return true;
    }

    function solve() {

        for (let row = 0; row < 9; row++) {

            for (let col = 0; col < 9; col++) {

                if (board[row][col] === '.') {

                    for (let num = 1; num <= 9; num++) {

                        let ch = num.toString();

                        if (isValid(row, col, ch)) {

                            board[row][col] = ch;

                            if (solve()) return true;

                            board[row][col] = '.';
                        }
                    }

                    return false;
                }
            }
        }

        return true;
    }

    solve();
};