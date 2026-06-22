var maxNumberOfBalloons = function(text) {

    let freq = {};

    for (let ch of text) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    return Math.min(
        freq['b'] || 0,
        freq['a'] || 0,
        Math.floor((freq['l'] || 0) / 2),
        Math.floor((freq['o'] || 0) / 2),
        freq['n'] || 0
    );
};