/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {

    let x = "";
    let sum = 0;

    while (n > 0) {
        const digit = n % 10;

        if (digit !== 0) {
            x = digit + x;
            sum += digit;
        }

        n = Math.floor(n / 10);
    }

    if (x === "") return 0;

    return Number(x) * sum;
};