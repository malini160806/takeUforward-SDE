var myAtoi = function(s) {
    let i = 0;
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    while (i < s.length && s[i] === ' ') i++;

    let sign = 1;
    if (s[i] === '+' || s[i] === '-') {
        if (s[i] === '-') sign = -1;
        i++;
    }

    let num = 0;

    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        num = num * 10 + (s[i].charCodeAt(0) - 48);

        if (sign * num >= INT_MAX) return INT_MAX;
        if (sign * num <= INT_MIN) return INT_MIN;

        i++;
    }

    return sign * num;
};