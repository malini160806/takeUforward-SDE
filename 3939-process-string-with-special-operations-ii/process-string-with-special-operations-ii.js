var processStr = function(s, k) {
    let len = 0n;

    // Calculate final length
    for (let ch of s) {
        if (ch >= 'a' && ch <= 'z') {
            len++;
        } else if (ch === '*') {
            if (len > 0n) len--;
        } else if (ch === '#') {
            len *= 2n;
        }
    }

    let K = BigInt(k);

    if (K >= len) return '.';

    // Reverse process
    for (let i = s.length - 1; i >= 0; i--) {
        let ch = s[i];

        if (ch >= 'a' && ch <= 'z') {
            len--;

            if (K === len) {
                return ch;
            }
        }

        else if (ch === '*') {
            len++;
        }

        else if (ch === '#') {
            len /= 2n;

            if (K >= len) {
                K -= len;
            }
        }

        else if (ch === '%') {
            K = len - 1n - K;
        }
    }

    return '.';
};