var maxIceCream = function(costs, coins) {

    let maxCost = Math.max(...costs);
    let freq = new Array(maxCost + 1).fill(0);

    for (let cost of costs) {
        freq[cost]++;
    }

    let count = 0;

    for (let cost = 1; cost <= maxCost; cost++) {

        while (freq[cost] > 0 && coins >= cost) {
            coins -= cost;
            count++;
            freq[cost]--;
        }
    }

    return count;
};